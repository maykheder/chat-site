import React from "react";
import a from '../../img/a.jpg';
import './ProfileHeader.css';
const ProfileHeader = () =>{
    return(
        <div className="p-header-wrap">
           <div className="p-header-left">
           <img className="p-header-img" src={a} alt=""></img>
           <p>Hannah mon</p>
           </div>
           <div className="p-header-right">
            <span className="p-header-button">Edit</span>
           </div>
        </div>
    )
}
export default ProfileHeader;