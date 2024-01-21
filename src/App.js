import './App.css';
import { useState } from "react";
import Toppage from './pages/Toppage';
import countriesJson from "./countries.json";
import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {

  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: ""
  })

  const getCountryData = () => {
    fetch("https://monotein-books.vercel.app/api/corona-tracker/country/" + country)
      .then(res => res.json())
      //.then(data => console.log(data[data.length - 1]));
      .then(data => setCountryData({
        date: new Date(data[data.length - 1].Date).getFullYear() + "-" + (new Date(data[data.length - 1].Date).getMonth() + 1) + "-" + new Date(data[data.length - 1].Date).getDate(),
        newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
        totalConfirmed: data[data.length - 1].Confirmed,
        newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
        totalRecovered: data[data.length - 1].Recovered
      }))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Toppage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData}></Toppage>
        } />
        <Route path="world" element={<p>world</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
