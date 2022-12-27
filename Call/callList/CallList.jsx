import React from "react";
import './CallList.css';
import CallDetail from "./CallDetail";
import './CallDetail.css';
import s from '../../img/status.png';
import { useSelector } from "react-redux";
const CallList=()=>{
    const people=useSelector((state)=>state.people);

    return(
        <div className="wrap-List">
             {people.map((item)=>(
                  <CallDetail personPic={item.img} personName={item.name} callState={item.callDetail} icon={item.callState} status={item.status}/>
             ))}
        </div>
    )
}
export default CallList;