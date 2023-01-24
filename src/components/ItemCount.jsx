import "./Item.css";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
function Itemcounter () {
    const [clicks, setClicks] = useState(1);
    return(
        
        <div className="itemCounter">
            <button onClick={() =>setClicks(clicks+1)}><FontAwesomeIcon className="fa-lg" icon={faPlus}/></button>
            <p>{clicks}</p>
            <button onClick={() =>setClicks(clicks-1)} disabled={clicks <=1}><FontAwesomeIcon className="fa-lg" icon={faMinus}/></button>
        </div>
    )
}


export default Itemcounter


//faMinus faPlus <FontAwesomeIcon className="fa-xl" icon={faCartShopping}/>