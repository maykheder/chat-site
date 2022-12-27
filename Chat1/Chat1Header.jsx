import React from "react";
import a from '../img/chevron-left.png';
import b from '../img/phone-7.png'
import '../Call/callHeader/CallHeader.css';
import './Chat1.css';
const Chat1Header = () =>{
return(
    <div className="chat1-header">
         <div className="chat-left">
          <div className="c-header-img">
            <img  src={a} alt=""></img>
            </div> 
           <div className="online">
            <p >Janet Fowler</p>
           <span>Online now</span></div>
           </div> 
           
           
           <div className="chat-header-right">
            <img  className="call-button" src={b} alt=""></img>
           </div>
    </div>
)
}
export default Chat1Header;