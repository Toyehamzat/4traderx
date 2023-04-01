import "../styles/side-bar.css"
import React from "react";
import { useState } from "react";


function Sidebaritem({item}){

    const [open,setOpen] =useState(false)
    const [click,setclick] =useState(false)

    if(item.childrens){
        return(
            <div className={open ? "Sidebaritem open":"Sidebaritem" }>
                <div className="sidebar-title">
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    </span>
                    <i className="bi bi-chevron-right toggle-btn" onClick={() => setOpen(!open)}/>
                </div>
                <div className="content">
                     {item.childrens.map((child,index) => <Sidebaritem key={index} item={child}/>)}
                </div>
                        
            </div>
        )

    } else{
        return(
            <a href={item.path || "#"} className={click? "sidebaritem-plain click" :"sidebaritem-plain"} onClick={() => setclick(!click)}>
                {item.icon && <i className={item.icon}></i>}
                {item.title}
            </a>
        )
    }
}

export default Sidebaritem;