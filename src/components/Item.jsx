// funtion NavItem (props) {
//     return <h6>{props.text}</h6>
// }
import "./Item.css";
import React from "react";

function Item (props) {
    return(
    <div className="card">
        <div>
            <img width="180px" src={props.image} lat='imagen'></img>
        </div>
        
        <h3>{props.title}</h3>
        <h4>${props.price}</h4>
        <p>{props.detail}</p>
    </div>
    )
}

export default Item