import React, {useState} from "react";

//import any components needed
import { specials } from '../../../data'; 
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  let [data] = useState(specials)
  return (
    <div className="specials-con">
      {data.map((special, index) =>{
        return(
          <SpecialButton
          special={special}
          key={index}

          />
        )
      })/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Specials