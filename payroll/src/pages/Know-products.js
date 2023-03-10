import React from "react";
import notfication from "../component/images/Vector (3).svg"
import background from "../component/images/Ellipse 1103 (1).svg"
import profile from "../component/images/Ellipse 1076.svg"
import "../styles/Know-products.css"
function KnowProducts(){
    return(
        <div className="Know-products">
            <div className="Header">
                <div className="Header-title">
                    Know Your Products
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
            <div className="know-product-content"> 
                <p className="know-product-content-title">Global Service</p>
                <hr/>
                <div className="main-content">
                <div className="products">
                    <ul>
                        <li>Global Services</li>
                        <li>Currency Exchange</li>
                        <li>Payroll</li>
                        <li >
                            <div className="flex"> 
                               Buy/Sell
                               <p>Coming Soon</p>  
                            </div>
                        </li>
                        <li >
                            <div className="flex"> 
                               Payment API
                               <p>Coming Soon</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr className="deg"/>
                <div className="details">
                    <p className="details-title">Peer-to-Peer Exchange</p>
                    <ol className="decimal">
                        <li >
                        Create Exchange Request:
                        <ol className="lower-alpha">
                            <li>
                            Once they select their currency, flitter through suggestion requests and show them the opposite currency. 
                            </li>
                            <li>
                            Once they add the amount, push up a request that matches or is close to that amount and the opposite currency.
                            </li>
                            <li>
                            Once they add the amount, show them the request that matches that. 
                            </li>
                            <li>
                            Make the create button unclickable as you show suggestions, in addition to the skip button.
                            </li>
                            <li>
                            (Backend) If they click to skip to the suggestions and proceed with the request creation, run through the pool of Nigerian buyers and auto-fill the request.
                            </li>
                        </ol>
                        </li>

                        <li>
                        Funds exchange:
                        <ol className="lower-alpha">
                            <li>
                            Diaspora users:
                            <ol className="lower-roman"> 
                                <li>
                                Naira: Move naira from the Nigerian user's wallet to their naira wallet
                                </li>
                                <li>
                                Dollars: Move their dollar to the 4Traderx exchange collection account
                                </li>
                                <li>
                                If buying dollars: Increase the number in their USD Flutterwave wallet to match the amount bought, then move dollars from the 4Traderx exchange collection account to their 4Traderx bank account when they move funds to the bank account.
                                </li>
                            </ol>
                            </li>
                            <li>
                            Nigerian Users:
                            <ol  className="lower-roman">
                                <li>
                                Dollars: Increase dollar in their Flutterwave wallet 
                                </li>
                                <li>
                                Naira: decrease the amount in their naira wallet
                                </li>
                            </ol>
                            </li>
                        </ol>
                        </li>

                        <li>
                        Withdrawal:
                        <ol className="lower-alpha">
                            <li>
                            Diaspora users:
                            <ol className="lower-roman">
                                <li>
                                They can move dollars to their 4Traderx bank account. Move funds from the 4Traderx exchange collection account to their bank account
                                </li>
                                <li>
                                They can withdraw their naira through flutterwave
                                </li>
                                <li>
                                Give them four free monthly naira withdrawals after that #60 per withdrawal
                                </li>
                            </ol>
                            </li>
                            <li>
                            Nigerian users: 
                            <ol className="lower-roman">
                                <li>
                                They can withdraw dollars from their wallet to a virtual card or do a wire transfer
                                </li>
                                <li>
                                When they withdraw to a virtual card, move funds from the 4Traderx exchange collection account to the 4Traderx virtual card collection account.
                                </li>
                                <li>
                                When they make a wire transfer, send it to admin for approval, show them the pending status, move the transfer amount to the 4Traderx wire transfer account and move the fee to the fee account.
                                </li>
                            </ol>
                            </li>
                        </ol>

                        </li>
                    </ol>
                </div>
                </div>
            </div>
             
        </div>
    )
}


export default KnowProducts;