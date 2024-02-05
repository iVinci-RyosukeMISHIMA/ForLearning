import Header from "../components/Header.js";
import Title from "../components/Title.js";
import Selector from "../components/Selector.js";
import Results from "../components/Results.js";

type TopPageType = {
  countriesJson: {
    Country: string
    Slug: string
  }[]
  setCountry: React.Dispatch<React.SetStateAction<string>>
  countryData: {
    date: string
    newConfirmed: number
    totalConfirmed: number
    newRecovered: number
    totalRecovered: number
  },
  loading: boolean
}

const TopPage = ({ countriesJson, setCountry, countryData, loading }: TopPageType) => {
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