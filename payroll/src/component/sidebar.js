import React from "react";
import logo from "./images/final-logo.31a11926.svg"
import "../styles/side-bar.css"


const Sidebar =() =>{
    return(
        <div className="side-bar">
            <div className="side-bar-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className= "Sidebar-bar-menus">
                    <ul>
                        <li>
                            <a href="#" className="side-bar-menu">
                                <div className="side-bar-menu-icon">
                                    <i class="bi bi-house-door-fill"></i>
                                </div>
                                 Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="side-bar-menu">
                                <div className="side-bar-menu-icon">
                                <i class="bi bi-wallet-fill"></i>
                                </div>
                                 Account
                            </a>
                        </li>
                        <li>
                            <a href="#" className="side-bar-menu">
                                <div className="side-bar-menu-icon">
                                <i class="bi bi-currency-exchange"></i>
                                </div>
                                 Exchange
                            </a>
                        </li>
                        <li>
                            <a href="#" className="side-bar-menu">
                                <div className="side-bar-menu-icon">
                                <i class="bi bi-archive-fill"></i>
                                </div>
                                 Buy/Sell
                            </a>
                        </li>
                        <li>
                            <a href="#" className="side-bar-menu">
                                <div className="side-bar-menu-icon">
                                <i class="bi bi-receipt-cutoff"></i>
                                </div>
                                 Payroll
                                 <div className="side-bar-menu-icon">
                                 <i class="bi bi-chevron-down"></i>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="side-bar-menu">
                                <div className="side-bar-menu-icon">
                                <i class="bi bi-gear-fill"></i>
                                </div>
                                 Settings
                            </a>
                        </li>
                        <li>
                            <a href="#" className="side-bar-menu">
                                <div className="side-bar-menu-icon-red">
                                <i class="bi bi-box-arrow-left"></i>
                                </div>
                                 Logout
                            </a>
                        </li>
                    </ul>
            </div>
         </div>
    )
}

export default Sidebar;