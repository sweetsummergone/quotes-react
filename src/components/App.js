import React from "react";
import GraphContext from "../contexts/GraphContext";
import { getCandles } from "../utils/api";

import Graph from "./Graph";
import Price from "./Price";

function App() {
  const [data, setData] = React.useState([]);

  const [currency, setCurrency] = React.useState("BTCUSDT");
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
    <div className="App">
      <GraphContext.Provider value={{value: currency, data: data, minValue: minValue, maxValue: maxValue, scale: scale}}>
        <Price />
        <Graph />
      </GraphContext.Provider>
    </div>
  );
}

export default App;
