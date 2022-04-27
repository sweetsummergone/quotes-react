import Quotes from "./Quotes";
import Indicators from "./Indicators";

export default function Graph(props) {
    
    return (
        <div className="graph">
            <Quotes />
            <Indicators />
        </div>
    )
}