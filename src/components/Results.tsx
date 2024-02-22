import Loading from "./Loading";
import { DetailedCountryData as CountryData } from "../types/Types";
import { Typography, ThemeProvider } from "@material-ui/core";
import { StyleForText } from "../styles/styles";


type ResultsType = {
    countryData: CountryData,
    loading: boolean
}

const Results = ({ countryData, loading }: ResultsType) => {
    const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } = countryData;
    return (
        <ThemeProvider theme={StyleForText}>
            {loading ? <Loading /> :
                <Typography variant="body1">
                    <p>日付：<span>{date.slice(0, 10)}</span></p>
                    <p>新規感染者：{newConfirmed.toLocaleString()}</p>
                    <p>感染者総数：{totalConfirmed.toLocaleString()}</p>
                    <p>新規回復者：{newRecovered.toLocaleString()}</p>
                    <p>回復者総数：{totalRecovered.toLocaleString()}</p>
                </Typography>
            }
        </ThemeProvider >
    )
}

export default Results;