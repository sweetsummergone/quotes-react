import React from "react";
import Candle from "./Candle";
import GraphContext from "../contexts/GraphContext";

export default function Quotes() {

    const graph = React.useContext(GraphContext);

    return (
        <ul className="candles">
            {
                graph.data.map((element, key) => {
                    return (<Candle key={key}
                                    scale={graph.scale}
                                    highPrice={element["highPrice"]} 
                                    openPrice={element["openPrice"]} 
                                    closePrice={element["closePrice"]} 
                                    lowPrice={element["lowPrice"]}
                                    lowestPrice={graph.scale * graph.minValue * 10}/>);
                })
            }
        </ul>
    )
}