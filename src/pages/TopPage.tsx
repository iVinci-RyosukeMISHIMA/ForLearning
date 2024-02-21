import Header from "../components/Header";
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";
import { useEffect, useState } from "react";
import countriesJson from "../countries.json";
import { DetailedCountryData as CountryData } from "../types/Types";

const TopPage = () => {
  const [country, setCountry] = useState<string>("japan");
  const [loading, setLoading] = useState<boolean>(false);

  const [countryData, setCountryData] = useState<CountryData>({
    date: "",
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered: 0
  })

  const createObjectForState = function (data: any) {
    const todaysData = data[data.length - 1];
    const yesterdaysData = data[data.length - 2];
    setCountryData({
      date: new Date(todaysData.Date).getFullYear() + "-" + (new Date(todaysData.Date).getMonth() + 1) + "-" + new Date(todaysData.Date).getDate(),
      newConfirmed: todaysData.Confirmed - yesterdaysData.Confirmed,
      totalConfirmed: todaysData.Confirmed,
      newRecovered: todaysData.Recovered - yesterdaysData.Recovered,
      totalRecovered: todaysData.Recovered
    })
  }

  useEffect(() => {
    const getCountryData = async () => {
      try {
        setLoading(true)
        const res = await fetch("https://monotein-books.vercel.app/api/corona-tracker/country/" + country)
        createObjectForState(await res.json())
        setLoading(false)
      } catch (error) {
        alert("Error occured. Please reload the page and try again.")
      }
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