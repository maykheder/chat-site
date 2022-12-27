import React from "react";
import ProfileHeader from "../Profile/Header/ProfileHeader";
import './Call.css';
import CallFooter from "./CallFooter/CallFooter";
import CallHeader from "./callHeader/CallHeader";
import CallList from "./callList/CallList";
const Call = () =>{
return(
    <div className="p-wrap">
        <CallHeader/>
        <CallList/>
        <CallFooter/>
    </div>
)
}
export default Call;