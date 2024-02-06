
interface SingleCountryDataType {
    Country: string
    NewConfirmed: number
    TotalConfirmed: number
}

interface CardType {
    allCountriesData: Array<SingleCountryDataType>
}

const Card = ({ allCountriesData }: CardType) => {
    return (
        <div className="card-container">
            {
                (
                    allCountriesData.map((data, index) =>
                        <div key={index} className="card-item">
                            <h2>{data.Country}</h2>
                            <p>新規感染者：{data.NewConfirmed.toLocaleString()}</p>
                            <p>感染者総数：{data.TotalConfirmed.toLocaleString()}</p>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Card;