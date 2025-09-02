  import { useState } from "react";
import { LOGO_HEADER } from "../utils/constant";
   const Header = () => 
    {
        const [btnnameReact, setbtnnameReact]= useState("login");
      console.log("Header rendered");
    
    return(
  <div className="header">
    <div className="logo-container">
      <img 
      src={LOGO_HEADER}
      alt="Food Logo"
      width="150"
    />
    </div>  
    <div className="nav-items">
        <ul>
            <li> Home</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnnameReact==="login"?setbtnnameReact("logout"):setbtnnameReact("login");
            }}>{btnnameReact}</button>  
        </ul>
    </div>
  </div>
    );
  };
export default Header;