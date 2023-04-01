import React from "react";
import notfication from "../component/images/Vector (3).svg"
import background from "../component/images/Ellipse 1103 (1).svg"
import profile from "../component/images/Ellipse 1076.svg"
import "../styles/Make-decision.css"

function MakeDecision(){
    return(
        <div className="Make-decision-page">
            <div className="Header">
                <div className="Header-title">
                    Decision Poll
                </div>
                <div className="notification-profile">
                    <div className="notification">
                        <img  src={background} alt="logo"/>
                        {/* <img  className="noty2" src={notfication} alt="logo"/> */}
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
            <div className="decision-main-content">
                <p className="decision-main-content-title">Create a decision</p>
                <hr className="line"/>
                <p className="sub-title">Fill in the details below to lay a complaint or make a suggestion</p>
                <form>
                    <div>
                         <label htmlFor="question">Question</label>
                         <input type="text" placeholder="Ask a question" className="question" required/>                          
                    </div>
                    <div>
                    <label htmlFor="option">Option</label>
                    
                    <input  className="option1 "type="text" placeholder="add" required/>    
                    <input className="option2" type="text" placeholder="add" required/>    
                    <input className="option3" type="text" placeholder="add" required/>
                   
  

                    </div>
                    <div className="forBtn">
                    <button type="submit">Create</button>
                    </div>
                    
                   
                </form>

                
                
                
            </div>
        </div>
    )
}
export default MakeDecision;