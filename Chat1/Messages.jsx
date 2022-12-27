import React from "react";
import './Messages.css';
import { useSelector} from "react-redux";
import img from "../img/c.jpg"
const Messages =()=>{
    
    const messages=useSelector((state)=>state.messages);
    return(
        <div className="messages">
             {messages.map((item)=>(
                <div className="row">
                    <div className="mess">
                         <img src={img} alt="" />
                    </div>

                    <div className="message">
                    <p>{item.text}</p>
                    <p>{item.time}</p>
                    </div>
                   
               
                </div>
                
             ))}
        </div>
    )
}
export default Messages;