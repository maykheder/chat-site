import React from "react";
import a from '../../img/edit.png';
import b from '../../img/search.png'
import '../../Call/callHeader/CallHeader.css';
import './ChatHeader.css';
const ChatHeader = () =>{
return(
    <div className="chat-header">
         <div className="c-header-left">
           
           <img className="c-header-img" src={a} alt=""></img>
           
           <p className="call-h-p">1 new message</p></div> 
           
           
           <div className="c-header-right">
            <img  className="search" src={b} alt=""></img>
           </div>
    </div>
)
}
export default ChatHeader;