import React from "react";
import './ChatFooter.css';
import a from '../../img/phone-2.png';
import b from '../../img/camera-2.png';
import c from '../../img/message-square.png';
import d from '../../img/users.png';
import { Link } from "react-router-dom";
const ChatFooter = () =>{
    return(
        
            <div className="chat-footer">
            <div className="c-icons">
            <Link to="../../Call/Call"> <div className="wrap-img"><img src={a} alt=""></img></div></Link>
            <Link to="../../Camera/Camera"> <div className="wrap-img"><img src={b} alt=""></img></div></Link>
            <div className="wrap-img"> <img src={c} alt=""></img></div>
           <Link to="/"><div className="wrap-img"> <img src={d} alt=""></img></div></Link>
            </div>
            <div className="home-line"></div>
            
        </div>
       
        
    )
}
export default ChatFooter;