import React from "react";
import './New.css';
const New = (props) =>{
return(
    <div className="new-wrap">
        <div className="new-img">
            <img  src={props.emojy} alt=""></img>
        </div>
        <span>{props.title}</span>
    </div>
)
}
export default New;