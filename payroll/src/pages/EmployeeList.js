import React from "react"
import  "../styles/Know-team.css"
import { useState } from "react"
import profilePic from "../component/images/Rectangle 3390.svg"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function EmployeeList({team}){
    const [Toggle,setToggle] =useState(false)
    const src=profilePic
    return(
        <div className="employee-list">
        <a href={team.path} className={Toggle? "name-title toggle" :"name-title"}  onClick={() => setToggle(!Toggle)}>
           <p className="boldp1">
               {team.Name}
           </p>
           <p className="notboldp1">
               {team.title}
           </p>
        </a>
     </div>

   
    )
}

export default EmployeeList