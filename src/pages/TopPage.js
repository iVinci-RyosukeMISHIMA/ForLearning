import Header from "../components/Header.js";
import Title from "../components/Title.js";
import Selector from "../components/Selector.js";
import Results from "../components/Results.js";

const TopPage = ({ countriesJson, setCountry, getCountryData, countryData }) => {
  return (
    <div>
      <Header />
      <Title />
      <Selector countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} />
      <Results countryData={countryData} />
    </div>
  )
}

export default TopPage;