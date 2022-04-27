import GraphContext from "../contexts/GraphContext";

export default function Price() {
    return (
        <GraphContext.Consumer>
            {currency => 
                <div className="price">
                    <p className="price__value">{currency.maxValue}</p>
                </div>
            }
        </GraphContext.Consumer>
    )
}