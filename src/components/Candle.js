import React from "react"

export default function Candle(props) {
    const increased = props.closePrice > props.openPrice;
    const color = increased ? "#A1B57D" : "#B33030";
    const marginBottomInnerline = increased ? props.openPrice - props.lowPrice : props.closePrice - props.lowPrice;

    const outerlineStyle = {
        backgroundColor: color,
        height: `${props.scale * (props.highPrice - props.lowPrice) * 10}vh`,
        marginBottom: `${props.scale * props.lowPrice * 10 - props.lowestPrice}vh`
    }

    const innerlineStyle = {
        backgroundColor: color,
        height: `${props.scale * Math.abs(props.closePrice - props.openPrice) * 10}vh`,
        marginBottom: `${props.scale * marginBottomInnerline * 10}vh` 
    }

    return (
        <li className="candle">
            <div className="candle__outerline" style={outerlineStyle}>
                <div className="candle__innerline" style={innerlineStyle}></div>
            </div>
        </li>
    )
}