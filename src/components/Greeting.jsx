import "./Item.css";

import React from "react";

function Greeting (props) {
    return (
        <div className="greeting">
            <h2>
                {props.text}
            </h2> 
        </div>
    )
    // const [clicks, setClicks] = useState(0);
    // return(
    //     <div>
    //         <p>Contador de clicks:{clicks}</p>
    //         <button onClick={() =>setClicks(clicks+1)}>Increase</button>
    //         <button onClick={() =>setClicks(clicks-1)} disabled={clicks === 0}>Decrease</button>
    //         <button onClick={() =>setClicks(0)} disabled={clicks === 0}>reset</button>
    //     </div>
    // )
}


export default Greeting