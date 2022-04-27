import GraphContext from "../contexts/GraphContext";

export default function Indicators(props) {
    return (
      <GraphContext.Consumer>
        {currency => 
          <div className="indicators">
            <p className="indicator indicator__high">{currency.maxValue}</p>
            <p className="indicator indicator__low">{currency.minValue}</p>
          </div>
        }
      </GraphContext.Consumer>
    )
}