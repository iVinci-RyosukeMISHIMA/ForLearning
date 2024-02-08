import Header from "../components/Header";
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";
import { useEffect, useState } from "react";
import countriesJson from "../countries.json";

type CountrydataType = {
  date: string
  newConfirmed: number
  totalConfirmed: number
  newRecovered: number
  totalRecovered: number
}

const TopPage = () => {
  const [country, setCountry] = useState<string>("japan");
  const [loading, setLoading] = useState<boolean>(false);

  const [countryData, setCountryData] = useState<CountrydataType>({
    date: "",
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered: 0
  })

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

  return (
    <div>
      <Header />
      <Title />
      <Selector countriesJson={countriesJson} setCountry={setCountry} />
      <Results countryData={countryData} loading={loading} />
    </div>
  )
}

export default TopPage;