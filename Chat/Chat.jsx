import React from "react";
import ChatFooter from "./ChatFooter/ChatFooter";
import './Chat.css';
import ChatHeader from "./ChatHeader/ChatHeader";
import Chats from "./Chats";
import { useSelector } from "react-redux";
const Chat=()=>{
    const chat=useSelector((state)=>state.chat);


    return(
        <div className="p-wrap">
            <div className="shadow2 flex1"></div>
            <ChatHeader/>
            <div>
            {chat.map((item)=>(
               <Chats img={item.img}
                name={item.name} message={item.message} 
               time={item.time} status={item.status}/>
                 

               ))}
            </div>
             
            <ChatFooter/>
            
        </div>
    )
}
export default Chat;