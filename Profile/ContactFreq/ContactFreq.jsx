import React from "react";
import './ContactFreq.css';
import Address from "./Address";
import { useSelector } from "react-redux";
const ContactFreq = () =>{
    const people=useSelector((state)=>state.people);
    return(
        <div>
            
            <div className="wrap-freq">
            {people.map((item)=>(
        <Address
      
         personPic={item.img} 
        personName={item.name}
         personNumber={item.number}/>
            ))}
        </div>
        </div>
        
    )
}
export default ContactFreq;