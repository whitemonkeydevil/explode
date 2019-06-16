import React from "react"
import "./Header.css"
import Cart from "../Cart/Cart"

 function Header(props){
     return(
         <div className="header-container">
             <h1>亞馬遜.號</h1><h2>Amozun.cn</h2>
                <Cart cartNumber={props.numberOfItems}/>
         </div>
     )  
 }
 export default Header;