import { SummarizedCountryData as SingleCountryData } from "../types/Types";

type AllCountriesData = { allCountriesData: SingleCountryData[] }

const Card = ({ allCountriesData }: AllCountriesData) => {
    return (
        <div className="card-container">
            {
                allCountriesData.map((data, index) =>
                    <div key={index} className="card-item">
                        <h2>{data.Country}</h2>
                        <p>新規感染者：{data.NewConfirmed.toLocaleString()}</p>
                        <p>感染者総数：{data.TotalConfirmed.toLocaleString()}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Card;