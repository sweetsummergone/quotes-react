import React from "react";
import { getCandles } from "../utils/api"
import Candle from "./Candle";

export default function Quotes() {
    const [data, setData] = React.useState([]);

    const [minValue, setMinValue] = React.useState(0);
    const [maxValue, setMaxValue] = React.useState(0);
    const [scale, setScale] = React.useState(0);

    React.useState(() => {
        getCandles()
        .then(res => {
            setData(res);
            setMinValue(Math.min.apply(null, (res.map(element => {
                return element["lowPrice"];
            }))));
            setMaxValue(Math.max.apply(null, (res.map(element => {
                return element["highPrice"];
            }))));
        })
    }, []);

    React.useEffect(() => {
        setScale(minValue * 100 / maxValue < 1 ? minValue * 100 / maxValue : 1 * 100 / maxValue);
    }, [data, minValue, maxValue]);

    return (
        <ul className="candles">
            {
                data.map((element, key) => {
                    return (<Candle key={key}
                                    scale={scale}
                                    highPrice={element["highPrice"]} 
                                    openPrice={element["openPrice"]} 
                                    closePrice={element["closePrice"]} 
                                    lowPrice={element["lowPrice"]}
                                    lowestPrice={scale * minValue * 10}/>);
                })
            }
        </ul>
    )
}