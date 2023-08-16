import React from "react";
import "../../styles/Know-team.css";
function EmployeeList({ team }) {
  return (
    <div className="employee-list">
      <div className="name-title">
        <p className="boldp1">{team.Name}</p>
        <p className="notboldp1">{team.title}</p>
      </div>
    </div>
  );
}

export default EmployeeList;
