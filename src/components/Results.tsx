import Loading from "./Loading";

type ResultsType = {
    countryData: {
        date: string
        newConfirmed: number
        totalConfirmed: number
        newRecovered: number
        totalRecovered: number
    },
    loading: boolean
}

const Results = ({ countryData, loading }: ResultsType) => {
    const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } = countryData;
    return (
        <div>
            {loading ? <Loading /> :
                <div>
                    <p>日付：<span>{date.slice(0, 10)}</span></p>
                    <p>新規感染者：{newConfirmed.toLocaleString()}</p>
                    <p>感染者総数：{totalConfirmed.toLocaleString()}</p>
                    <p>新規回復者：{newRecovered.toLocaleString()}</p>
                    <p>回復者総数：{totalRecovered.toLocaleString()}</p>
                </div>
            }
        </div>

    )
}

export default Results;