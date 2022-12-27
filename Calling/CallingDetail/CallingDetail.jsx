import React from "react";
import './CallingDetail.css';
const CallingDetail=(props)=>{
    return(
        <div className="callingD">
          <img src={props.img} alt=""></img>
          <p className="name">{props.name}</p>
          <p className="callState">{props.callState}</p>
        </div>
    )
}
export default CallingDetail;