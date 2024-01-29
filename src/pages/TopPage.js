import Title from "../components/Title.js";
import Selector from "../components/Selector.js";
import Results from "../components/Results.js";

const TopPage = (props) => {
  return (
    <div>
      <Title />
      <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
      <Results countryData={props.countryData} />
    </div>
  )
}

export default TopPage;