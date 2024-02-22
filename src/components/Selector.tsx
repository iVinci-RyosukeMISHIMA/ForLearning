import { ThemeProvider, Box, createTheme } from "@material-ui/core";

type SelectorType = {
  countriesJson: {
    Country: string
    Slug: string
  }[]
  setCountry: React.Dispatch<React.SetStateAction<string>>
}

const Selector = ({ countriesJson, setCountry }: SelectorType) => {

  return (
    <ThemeProvider theme={createTheme()}>
      <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <select onChange={e => setCountry(e.target.value)}>
          {
            countriesJson.map((country, index) =>
              <option key={index} value={country.Slug}>{country.Country}</option>
            )
          }
        </select>
      </Box>
    </ThemeProvider>
  )
}

export default Selector;