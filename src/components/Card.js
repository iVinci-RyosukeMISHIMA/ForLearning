
const Card = ({ allCountriesData }) => {
    return (
        <div>
            {
                (
                    allCountriesData.map((data, index) =>
                        <div key={index}>
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