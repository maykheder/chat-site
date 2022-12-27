import React from "react";
import { useDispatch ,useSelector} from "react-redux";
import './Chat1.css';
import { useState } from "react";
import Chat1Header from "./Chat1Header";
import { send } from "../redux/MessageSlice";
import Messages from "./Messages";
import v from '../img/smile.png';
import x from '../img/camera-1.png';
import y from '../img/mic.png';
const Chat1=()=>{
    const dispatch=useDispatch();
    
    const [value,setValue] = useState();
   const onSubmit=(event)=>{
     event.preventDefault();
     dispatch(
        send({
            text:value,
        })
     );
     setValue("");
   };
   
    return(
        <div className="p-wrap">
            <Chat1Header/>
            <Messages/>
            <div > <form className="input-field" onSubmit={onSubmit}>
                <div className="left-input">
                <img src={v} alt=""></img>
               
                <input value={value} 
                placeholder="Type your message"
                onChange={(event)=>setValue(event.target.value)} />
                
                
                </div>
                <div className="right-input">
                <button className="blue-ci" type="submit"><img src={x} alt=""></img></button>
                <button className="blue-ci"><img src={y} alt=""></img></button>
                </div></form>
               
               
            </div>
            <div className="home-line5"></div>
        </div>
    )
}
export default Chat1;