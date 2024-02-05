
import Header from "../components/Header"
import Title from "../components/Title"
import Card from "../components/Card"

interface SingleCountryDataType {
    Country: string
    NewConfirmed: number
    TotalConfirmed: number
}

interface WorldPageType {
    allCountriesData: Array<SingleCountryDataType>
}

const WorldPage = ({ allCountriesData }: WorldPageType) => {
    return (
        <div>
            <Header />
            <Title />
            <Card allCountriesData={allCountriesData} />
        </div>
    )
}

export default WorldPage;