import "../styles/side-bar.css"
import Sidebaritem from "./sidebaritem";
import logo from "./images/final-logo.31a11926.svg"
import items from "../data/sidebar.json"


function sidebar(){
    return(
        <div className="side-bar">
            <div className="side-bar-logo">
                <img src={logo} alt="logo"/>
            </div>
            {items.map((item,index) =><Sidebaritem key={index} item={item}/>)}
        </div>
    )
}


export default sidebar;