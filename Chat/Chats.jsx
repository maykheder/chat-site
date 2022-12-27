import React from "react";
import { Link } from "react-router-dom";
import './Chat.css';
const Chats=(props)=>{
    return(
        <div className="chats">
           
            <div className="add-wrap">
        <div className="add-wrap-3">
        <div className="left">
        <img   className="state2" src={props.status}></img>

        <img className="add-pic" src={props.img}  alt=""></img>
        </div>
       <div className="center">
        <span>{props.name}</span>
        <span>{props.message}</span>
       </div>
       <div className="time">
       <p> {props.time}</p>
       </div>
       
        </div>
        
    </div>
    
        </div>
    )
}
export default Chats;