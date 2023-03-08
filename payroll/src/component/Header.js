import React from "react";
import "../styles/Header.css"
import notfication from "./images/Vector (3).svg"
import background from "./images/Ellipse 1103 (1).svg"
import profile from "./images/Ellipse 1076.svg"


function Header(){
    return(
        <div className="Header">
            <div className="search-bar">
                <i className="bi bi-search"></i>
                <input type="search"placeholder="search" ></input>
            </div>
            <div className="notification-profile">
                <div className="notification">
                    <img  src={background} alt="logo"/>
                    <img  className="noty" src={notfication} alt="logo"/>
                    
                </div>
                <div className="profile">
                    <img src={profile} alt="logo"/>
                    <div>
                        <p className="name">Micheal Ajayi</p>
                        <p className="x">xxxxxxxxx</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Header;