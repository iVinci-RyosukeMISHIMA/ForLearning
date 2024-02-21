
import Header from "../components/Header"
import Title from "../components/Title"
import Card from "../components/Card"
import { useState, useEffect } from "react"

interface SingleCountryDataType {
    Country: string
    NewConfirmed: number
    TotalConfirmed: number
}

interface AllCountriesDataType extends Array<SingleCountryDataType> { }


const WorldPage = () => {

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
        <div>
            <Header />
            <Title />
            <Card allCountriesData={allCountriesData} />
        </div>
    )
}

export default WorldPage;