import React from "react";
import './CallFooter.css';
import a from '../../img/phone.png';
import b from '../../img/camera-2.png';
import c from '../../img/message-square-1.png';
import d from '../../img/users.png';
import { Link } from "react-router-dom";
import Profile from "../../Profile/Profile";
const CallFooter = () =>{
    return(
        
            <div className="call-footer-wrap">
            <div className="c-icons">
            <div className="wrap-img"><img src={a} alt=""></img></div>
            <Link to="../../Camera/Camera"><div className="wrap-img"> <img src={b} alt=""></img></div></Link>
            <Link to="../../Chat/Chat"> <div className="wrap-img"> <img src={c} alt=""></img></div></Link>
           <Link to="/"><div className="wrap-img"><img src={d} alt=""></img></div></Link>
            </div>
            <div className="home-line"></div>
            
        </div>
       
        
    )
}
export default CallFooter;