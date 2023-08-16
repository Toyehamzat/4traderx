
import React, { useState } from "react";


const Dropdown = ({ placeHolder, options }) => {
 
  const [showMenu, setShowMenu] = useState(false);

  const [selectedValue,setSelectedValue]=useState(false);

  const getDisplay = () => {
    if(selectedValue){
      return  selectedValue.label
    }
    return placeHolder;
  };
  const itemCLick =(option)=>{
    setSelectedValue(option);
  }

  const isSelected =(option) =>{
    if(!selectedValue){
      return false
    }
    return selectedValue.value === option.value
  }


  return (
    <div className="dropdown-container">
      <div className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div
            className={showMenu ? "dropdown-tool active" : "dropdown-tool"}
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className={showMenu ? "dropdown-menu active" : "dropdown-menu"}>
        {options.map((option) => (
          <div key={option.value} className={`dropdown-item ${isSelected(option) &&"selected"}`} onClick={() => itemCLick(option)}>
            <img src={`images/${option.value}.svg`} alt=""/> 
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
