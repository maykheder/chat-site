import React from "react";
import './ProfileFooter.css';
import a from '../../img/phone-2.png';
import b from '../../img/camera-2.png';
import c from '../../img/message-square-1.png';
import d from '../../img/users-4.png';
import {Routes,Route,Router,Link} from "react-router-dom";
import Call from "../../Call/Call";
import Chat from "../../Chat/Chat";
const ProfileFooter = () =>{
    return(
        <div className="footer-1">
             <div className="p-footer-wrap">
                <div className="shadow-3" ></div>
            <div className="f-icons">
            <Link to="../../Call/Call"><div className="wrap-img"> <img src={a} alt=""></img></div></Link>
            <Link to="../../Camera/Camera"><div className="wrap-img"> <img src={b} alt=""></img></div></Link>
            <Link to="../../Chat/Chat"> <div className="wrap-img"> <img src={c} alt=""></img></div></Link>
            <div className="wrap-img"> <img src={d} alt=""></img></div>
          
            </div>
    
        </div>

        </div>
           
       
        
    )
}
export default ProfileFooter;