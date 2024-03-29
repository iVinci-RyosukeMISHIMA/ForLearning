import Header from "../components/Header"
import Title from "../components/Title"
import Card from "../components/Card"
import { useState, useEffect } from "react"
import { SummarizedCountryData as SingleCountryData } from "../types/Types";

const WorldPage = () => {

    const [allCountriesData, setAllCountriesData] = useState<SingleCountryData[]>([
        {
            Country: "",
            NewConfirmed: 0,
            TotalConfirmed: 0
        }
    ]);

    useEffect(() => {
        const getAllCountriesData = async () => {
            try {
                const res = await fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
                const data = await res.json()
                setAllCountriesData(data.Countries)
            } catch (error) {
                alert("Error occured. Please reload the page and try again.")
            }
        }
        getAllCountriesData();
    }, [])

    return (
        <div>
            <Header />
            <Title />
            <Card allCountriesData={allCountriesData} />
        </div>
    )
}

export default WorldPage;