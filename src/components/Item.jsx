
import "./Item.css";
import React from "react";
import Itemcounter from "./ItemCount";
import { Link } from "react-router-dom";

function Item ({id, title, price, imgurl, detail}) {
    const urlDetail = `/item/${id}`
    return(
    <div className="card">
        <Link to={urlDetail}>
            <div>
                <img width="180px" height="200px" src={imgurl} lat='imagen'></img>
            </div>
        </Link>
        
        <h3>{title}</h3>
        <h4>${price}</h4>
        <p>{detail}</p>
        <Link to={urlDetail}> 
            <button >Detalles</button>
        </Link>
        <div>
            <Itemcounter/>
        </div>
    </div>
    )
}

export default Item