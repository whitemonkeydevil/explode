import React from "react"
import "./Body.css"


function Body(props){
    let {addToCart,removeFromCart,wholeSale}=props
    return(
        <div className={"body-container"}>
            <div className="img-container">
            <img alt={"product logo"} src={"https://images-na.ssl-images-amazon.com/images/I/51f-vsakkWL._SX569_.jpg"}/>
            </div>
            <div className="desc-container">
                <h1>
                    Railgun UsM73Mhp
                </h1>
                <p>R Usm73Mhp is a US based Emp wave artiillery gun used in Carriers. Fires at 4500mph</p>
                <p>Made from household materials</p>
                <button onClick={addToCart}>Habibi I like (+1)</button>
                <button onClick={removeFromCart}>Quikr(-1)</button>   
                <button onClick={wholeSale}>Buy Wholesale Inshallah Boys Played well :)</button>            
            </div>

        </div>

    )

}


export default Body;