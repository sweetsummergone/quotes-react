import GraphContext from "../contexts/GraphContext";

export default function Price() {
    return (
        <GraphContext.Consumer>
            {currency => 
                <div className="price">
                    <p className="price__value">{`${currency.value} : ${currency.data[0]?.closePrice}`}</p>
                </div>
            }
        </GraphContext.Consumer>
    )
}