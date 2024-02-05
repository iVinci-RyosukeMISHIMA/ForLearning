import './App.css';
import { useEffect, useState } from "react";
import TopPage from './pages/TopPage';
import WorldPage from './pages/WorldPage';
import countriesJson from "./countries.json";
import { Route, Routes, BrowserRouter } from "react-router-dom";

type CountrydataType = {
  date: string
  newConfirmed: number
  totalConfirmed: number
  newRecovered: number
  totalRecovered: number
}

interface SingleCountryDataType {
  Country: string
  NewConfirmed: number
  TotalConfirmed: number
}

interface AllCountriesDataType extends Array<SingleCountryDataType> { }

function App() {

  const [country, setCountry] = useState<string>("japan");
  const [countryData, setCountryData] = useState<CountrydataType>({
    date: "",
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered: 0
  })
  const [allCountriesData, setAllCountriesData] = useState<AllCountriesDataType>([
    {
      Country: "",
      NewConfirmed: 0,
      TotalConfirmed: 0
    }
  ]
  );
  const [loading, setLoading] = useState<boolean>(false);



  useEffect(() => {
    const getCountryData = () => {
      setLoading(true);
      fetch("https://monotein-books.vercel.app/api/corona-tracker/country/" + country)
        .then(res => res.json())
        .then(data => setCountryData({
          date: new Date(data[data.length - 1].Date).getFullYear() + "-" + (new Date(data[data.length - 1].Date).getMonth() + 1) + "-" + new Date(data[data.length - 1].Date).getDate(),
          newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered
        })
        )
        .then(a => setLoading(false))
        .catch(err => alert("Error occured. Please reload the page and try again."))
    }
    getCountryData();
  }, [country])

  useEffect(() => {
    fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
      .catch(err => alert("Error occured. Please reload the page and try again."))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} countryData={countryData} loading={loading}></TopPage>} />
        <Route path="world" element={<WorldPage allCountriesData={allCountriesData}></WorldPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
