import React from "react";


const NumberButton = props => {
  return <button  onClick={() => props.changeNumber(props.numbers)}className="btn nums" 
  >{props.numbers}</button>
  
};

export default NumberButton