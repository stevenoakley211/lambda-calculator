import React from "react";


const NumberButton = props => {
  return <button className="btn nums"
  onClick={() => props.setSelectedButton(props.numbers)} 
  >{props.numbers}</button>
  
};

export default NumberButton