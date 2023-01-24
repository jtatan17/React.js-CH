import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons";

// npm i @fortawesome/fontawesome-svg-core
// npm i @fortawesome/free-solid-svg-icons
// npm i @fortawesome/free-regular-svg-icons
// npm i @fortawesome/react-fontawesome@latest
import CartWidget from "./CartWidget"


function NavBar () {
    console.log(iconList);
    return (
        <nav>
            <ul className="nav-menu">
                <h2>
                    <li>
                        <a href="/">FootLocker</a>
                    </li>
                </h2>
                {/* <li className="nav-item">
                    <a className="nav-link">
                        Basketball
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                        Running
                    </a>  
                </li> */}
                <li className="nav-item" >
                    <a className="nav-link" href="/detalle">
                        Detalle
                    </a>
                </li> 
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar