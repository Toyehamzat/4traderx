import React from "react";
import notfication from "../component/images/Vector (3).svg"
import background from "../component/images/Ellipse 1103 (1).svg"
import profile from "../component/images/Ellipse 1076.svg"
import "../styles/account.css"
import Chart from "./Chart";
import { useState } from "react";
import {UserData} from "../data/chart"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


function Account(){
    const [userData,setUserData] = useState({
        labels: UserData.map((data) => data.month),
        datasets:[{
            type:"bar",
            fill:false,
            radius:1,
            borderWidth:1,
            pointBorderWidth:0.5,
            tension:0.1,
            label:"Inflow",
            data: UserData.map((data) => data.inflow),
            backgroundColor:["#00A759"],
            borderRadius:50,
           
        },
        {
            type:"bar",
            fill:false,
            radius:1,
            borderWidth:1,
            pointBorderWidth:0.5,
            tension:0.1,
            label:"Outflow",
            data: UserData.map((data) => data.outflow),
            backgroundColor: ["#EC7E3D"],
            borderRadius:50,
        

        }
    ]
    })
    useEffect(() =>{
        AOS.init({duration:2000})

    },[])
    const [click,setclick] =useState(false);
    const choices =["Transactions","Operations"];
    const [myChoice,setMyChoice]=useState({

    })

    return(
        <div className="Account-page">
            <div className="Header">
                <div className="search-bar" >
                    <i className="bi bi-search"></i>
                    <input type="text"placeholder="search" ></input>
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
            <div className="first-content" data-aos="">
                <div className="naira-acct" data-aos="fade-right">
                    <div className="balance">
                        <p>Naira Account</p>
                        <p>₦146,246,250,590.20</p>
                    </div>
                    <p className="welcome">Welcome, let's get you started</p>
                    <div className="naira-acct-div1">
                        <i className="bi bi-bank"></i>
                        <p className="view">View Account Details</p>
                    </div>
                    <hr/>
                    <div className="naira-acct-div1">
                        <i className="bi bi-credit-card-2-back-fill"></i>
                        <p className="view">View Virtual Card</p>
                    </div>
                </div>
                <div className="notificate" data-aos="fade-down">
                    <div className="notificate-see-all">
                        <p className="notificate-title">Notifications</p>
                        <p className="see-all">See all</p>
                    </div>
                    <div className="notificate-div2">
                        <div className="shortname">
                            <img   src={notfication} alt="logo"/>
                        </div>
                      
                        <div>
                            <p  className="lorem1">Lorem Ipsum</p>
                            <p className="lorem2">Lorem Ipsum</p>
                        </div>
                        
                    </div>
                    <div  className="notificate-div2">
                        <div className="shortname">
                            <img   src={notfication} alt="logo"/>
                        </div>
                      
                        <div>
                            <p  className="lorem1">Lorem Ipsum</p>
                            <p className="lorem2">Lorem Ipsum</p>
                        </div>
                        
                    </div>
                    <div  className="notificate-div2">
                         <div className="shortname">
                             <img   src={notfication} alt="logo"/>
                         </div>
                      
                        <div>
                            <p  className="lorem1">Lorem Ipsum</p>
                            <p className="lorem2">Lorem Ipsum</p>
                        </div>
                        
                    </div>
                </div>
                <div className="beneficials" data-aos="fade-left">
                    <div className="beneficials-title">Beneficiaries</div>
                    <div className="beneficials-div1">
                        <div className="shortname">JS</div>
                        <p>John silo</p>
                    </div>
                    <div className="beneficials-div1">
                        <div className="shortname">SS</div>
                        <p>Sariao shu</p>
                    </div>
                    <div className="beneficials-div1">
                        <div className="shortname">TJ</div>
                        <p>Tamara jakson</p>
                    </div>

                </div>
            </div>
            <div className="second-content" data-aos="zoom-in">
               <button >
               <i className="bi bi-send-fill" ></i>
                    Send Money
                </button>
               <button >
               <i class="bi bi-box-seam-fill" ></i>
                     Fund Account
                </button>
                
            </div>
            <div className="third-content" data-aos="zoom-in">
                <div className="balance-overview-month">
                    <p>Balance Overview</p>
                    <button>
                        Month
                        <i className="bi bi-chevron-right"/>
                    </button>
                </div>
                <div className="chart">
                     <Chart chartData={userData}/>  
                </div>
               
            </div>
            <div className="fouth-content" data-aos="zoom-in">
                 <div className="transactions-operations">
                
                    {choices.map(choice =>(
                            <button type="button" key={choice} className={click? "choice-btn active":"choice-btn" }  onClick={() => { setMyChoice(choice
                            );setclick(!click) }}>
                                { choice }
                            </button>
                        ))}
                    
                       
                 </div>
                 <hr/>
                {myChoice ==="Operations" &&
                    <div>
                        <div className="titles" >
                            <div className="sub-titles">Account Details</div>
                            <div className="sub-sub-title">View and share your account details</div>
                        </div>
                        <hr/>
                        <div className="titles">
                            <div className="sub-titles">Dispute Transaction</div>
                            <div className="sub-sub-title">Resolve your card errors</div>
                        </div>
                        <hr/>
                        <div className="titles">
                            <div className="sub-titles">Bank Statement</div>
                            <div className="sub-sub-title">Download your bank statement</div>
                        </div>   
                    </div>
                }
                 {myChoice ==="Transactions" &&
                    <div>
                        <div className="titles" >
                            <div className="sub-titles">lorem</div>
                           
                        </div>
                        <hr/>
                        <div className="titles">
                            <div className="sub-titles">lorem</div>
                           
                        </div>
                        <hr/>
                        <div className="titles">
                            <div className="sub-titles">lorem</div>   
                        </div> 
                        <hr/>
                        <div className="titles">
                            <div className="sub-titles">lorem</div>   
                        </div>  
                    </div>
                }
             </div>
        
            
        </div>
    )
}


export default Account;