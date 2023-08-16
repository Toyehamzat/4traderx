import React from "react";
import teams from "../../data/team.json";
import "../../styles/Know-team.css";
// import notfication from "../images/Vector (3).svg";
import background from "../images/Ellipse 1103 (1).svg";
import profile from "../images/Ellipse 1076.svg";
import profilePic from "../images/Rectangle 3390.svg";
import EmployeeList from "./EmployeeList";
import KnowMicheal from "./KnowMicheal";
import Sidebar from "../sidebar";
function KnowTeam() {
  return (
    <div className="Know-team-page">
      <Sidebar/>
      <div className="Div">
        <div className="Header">
          <div className="Header-title">Know Your Team</div>
          <div className="notification-profile">
            <div className="notification">
              <img src={background} alt="logo" />
              {/* <img  className="noty1" src={notfication} alt="logo"/> */}
            </div>
            <div className="profile">
              <img src={profile} alt="logo" />
              <div>
                <p className="name">Micheal Ajayi</p>
                <p className="x">xxxxxxxxx</p>
              </div>
            </div>
          </div>
        </div>
        <div className="know-team-body">
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
              {teams.map((team, index) => (
                <EmployeeList key={index} team={team} />
              ))}
            </div>
          </div>
          <KnowMicheal />
        </div>
      </div>
    </div>
  );
}

export default KnowTeam;
