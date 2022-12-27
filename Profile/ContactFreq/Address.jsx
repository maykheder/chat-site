import React from "react";
import './Address.css';
import b from '../../img/chevron-right.png';
const Address = (props) =>{
return(<div>
    <div className="add-wrap">
        <div className="add-wrap-2">
        <div className="left">
        <img className="add-pic" src={props.personPic}  alt=""></img>
        </div>
       <div className="center">
        <span>{props.personName}</span>
        <span>{props.personNumber}</span>
       </div>
       <div className="right">
       <img className="chev" src={b} alt=""></img>
       </div>
        </div>
    </div>
    <div className="line"></div>
    </div>
)
}
export default Address;