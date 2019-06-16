import React from "react"
import "./Cart.css"

function Cart(props){
    return(
        <div className="cart-container">
            <div className="items-text"> 
            <h2> {props.cartNumber} </h2>
            </div>
            <h3> Guns </h3>
        </div>

    )

}


export default Cart;