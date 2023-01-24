import React from "react";
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";


function NavBar () {
    return (
        <nav>
            {/* <li className="nav-item">
                    <Link className="nav-link">
                        Basketball
                    </a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">
                        Running
                    </a>  
                </li> */}
            <ul className="nav-menu">
                <h2>
                    <li>
                        <Link to="/">FootLocker</Link>
                    </li>
                </h2>
                <li className="nav-item" >
                    <Link className="nav-link" to="/detalle">
                        Detalle
                    </Link>
                </li> 
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar