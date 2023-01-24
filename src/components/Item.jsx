
import "./Item.css";
import React from "react";
import Itemcounter from "./ItemCount";
import products from "../Data/products";

function Item ({title, price, imgurl, detail}) {
    return(
    <div className="card">

        <div>
            <img width="180px" height="200px" src={imgurl} lat='imagen'></img>
        </div>
        <h3>{title}</h3>
        <h4>${price}</h4>
        <p>{detail}</p>
        <button >Detalles</button>
        <div>
            <Itemcounter/>
        </div>
    </div>
    )
}

export default Item