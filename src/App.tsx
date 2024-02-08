import './App.css';
import { useEffect, useState } from "react";
import TopPage from './pages/TopPage';
import WorldPage from './pages/WorldPage';
import { Route, Routes, BrowserRouter } from "react-router-dom";

interface SingleCountryDataType {
  Country: string
  NewConfirmed: number
  TotalConfirmed: number
}

interface AllCountriesDataType extends Array<SingleCountryDataType> { }

function App() {

  const [allCountriesData, setAllCountriesData] = useState<AllCountriesDataType>([
    {
      Country: "",
      NewConfirmed: 0,
      TotalConfirmed: 0
    }
  ]);

  useEffect(() => {
    fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
      .catch(err => alert("Error occured. Please reload the page and try again."))
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage ></TopPage>} />
        <Route path="world" element={<WorldPage allCountriesData={allCountriesData}></WorldPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
