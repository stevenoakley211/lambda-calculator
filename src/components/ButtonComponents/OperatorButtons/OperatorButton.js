import React from "react";

const OperatorButton = props => {
  return <button className="btn operators">
      {props.operators.value/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  
};
export default OperatorButton