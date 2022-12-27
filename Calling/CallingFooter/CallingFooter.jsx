import React from "react";
import './CallingFooter.css';
import a from '../../img/plus.png';
import b from '../../img/video.png';
import c from '../../img/phone-4.png';

const CallingFooter = () =>{
    return(
        
        <div className="c-footer-wrap2">
            <div className="c-icons">
            <div className="grey"><img src={a} alt=""></img></div>
            <div className="grey"><img src={b} alt=""></img></div>
            <div className="red"><img src={c} alt=""></img></div>
           
            </div>
            
            <div className="home-line2"></div>
            
         </div>
       
        
    )
}
export default CallingFooter;