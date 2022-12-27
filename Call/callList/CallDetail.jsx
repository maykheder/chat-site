import React from "react";
import './CallDetail.css';

const CallDetail = (props) =>{

return(
<div>
    <div className="add-wrap">
        <div className="add-wrap-3">
        <div className="left">
        <img src={props.status} alt="" className="state2"></img>
        <img className="add-pic" src={props.personPic}  alt=""></img>
        
        
       
        </div>
       <div className="center">
        <span>{props.personName}</span>
        <span>{props.callState}</span>
       </div>
       <div className="arrow">
       <img  src={props.icon} alt=""></img>
       </div>
        </div>
    </div>
    <div className="line"></div>
    </div>
)
}
export default CallDetail;