import React from "react";

export default function Tooltip(props) {
    return (
        <div className={props.hidden ? "candle__tooltip hidden" : "candle__tooltip"} style={{
            top: props.position.top,
            left: props.position.left,
            pointerEvents: 'none',
        }}>
            <p>Open: {props.openPrice}</p>
            <p>High: {props.highPrice}</p>
            <p>Low: {props.lowPrice}</p>
            <p>Close: {props.closePrice}</p>
        </div>
    );
}
