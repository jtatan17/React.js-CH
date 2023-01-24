import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
function CartWidget() {
return(
<span className="cart">
    <FontAwesomeIcon className="fa-xl" icon={faCartShopping}/>
    <p>0</p>
</span>
)
}
export default CartWidget


