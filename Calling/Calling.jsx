import React from "react";
import './Calling.css';
import c from '../img/c.jpg';
import CallingDetail from "./CallingDetail/CallingDetail";
import CallingFooter from "./CallingFooter/CallingFooter";
const Calling =()=>{
    return(
        <div className="p-wrap">
            <CallingDetail img={c} name={"Janet Fowler"} callState={"calling..."}/>
           <CallingFooter/>
           
        </div>
    )
}
export default Calling;