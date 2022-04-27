import React from "react"

const currency = {
    value: "BTCUSDT",
    data: [],
    minValue: 0,
    maxValue: 0,
    scale: 0
}

const GraphContext = React.createContext(currency);

export default GraphContext;