import React from "react"
import Tooltip from "./Tooltip";

export default function Candle(props) {
    const candleElement = React.useRef(null);
    const [isTooltipHidden, setIsTooltipHidden] = React.useState(true);
    const [position, setPosition] = React.useState({ top: 0, left: 0 });

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

    function handleMouseMove(e) {
        setPosition({
            top: e.pageY,
            left: e.pageX,
        });
    }

    function handleMouseEnter() {
        setIsTooltipHidden(false);
    }

    function handleMouseLeave() {
        setIsTooltipHidden(true);
    }

    React.useEffect(() => {
        candleElement.current.addEventListener("mousemove", handleMouseMove);
        candleElement.current.addEventListener("mouseenter", handleMouseEnter);
        candleElement.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            candleElement.current.removeEventListener("mousemove", handleMouseMove);
            candleElement.current.removeEventListener("mouseenter", handleMouseEnter);
            candleElement.current.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <li className="candle" ref={candleElement} >
            <div className="candle__outerline" style={outerlineStyle}>
                <div className="candle__innerline" style={innerlineStyle}></div>
                <Tooltip hidden={isTooltipHidden} position={position} openPrice={props.openPrice} highPrice={props.highPrice} lowPrice={props.lowPrice} closePrice={props.closePrice} />
            </div>
        </li>
    )
}