import React from "react";
import a from '../../img/edit.png';
import b from '../../img/phone-call.png'
import './CallHeader.css';
const CallHeader = () =>{
return(
    <div className="p-header-wrap">
         <div className="c-header-left">
           
           <img className="c-header-img" src={a} alt=""></img>
           
           <p className="call-h-p">1 new message</p></div> 
           
           
           <div className="c-header-right">
            <img  className="call-button" src={b} alt=""></img>
           </div>
    </div>
)
}
export default CallHeader;