import React from "react";
import teams from "../data/team.json"
import "../styles/Header.css"
import "../styles/Know-team.css"
import notfication from "../component/images/Vector (3).svg"
import background from "../component/images/Ellipse 1103 (1).svg"
import profile from "../component/images/Ellipse 1076.svg"
import profilePic from "../component/images/Rectangle 3390.svg"
import EmployeeList from "./EmployeeList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KnowMicheal from "./KnowMicheal";
function KnowTeam(){

    return(
    <div className="Know-team-page">
        <div className="Header">
            <div className="Header-title">
                    Know Your Team
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
        <div className="Knowteamitem">
           <div>
                <img src={profilePic} alt="Pic" />
                    <div className="underprofilepic">
                        <p className="boldp">Micheal Ajayi</p>
                        <p className="notboldp">CEO and Founder</p>
                    </div>
                    <p className="employees"> Employees</p>
            </div>
            <div>
                {teams.map((team,index) =><EmployeeList key={index} team={team}/>)}
            </div>
        </div>
        <KnowMicheal/>
        {/* <Routes>
            <Route>
            <Route path="/KnowTeam/Micheal" element={<KnowMicheal/>}/>
            </Route>
        </Routes> */}
  </div>
    

        
    )
}


export default KnowTeam;