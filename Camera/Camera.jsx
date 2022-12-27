import React from "react";
import './Camera.css';
import camera from '../../src/img/rezaul-karim-1.png';
import close from '../img/x.png';
import stud from '../img/joseph-barrientos-Ji_G-1.png';
import shot from '../img/camera.png';
import fresh from '../img/refresh-ccw.png'
import { Link } from "react-router-dom";
const Camera = ()=>{
    return(
        <div className="p-wrap">
            <div className="camera-ui">
              <div className="close flex1">
                <img src={close} alt=""></img>
              </div>
              <div className="auto flex1"><p>Auto</p></div>
             <Link to="../../SelectPhoto/SelectPhoto">
               <img  className="studio flex1" src={stud} alt=""></img>
               </Link>
              <img className="shot flex1" src={shot} alt=""></img>
              <img className="refresh flex1" src={fresh} alt=""></img>
              <div className="shadow flex1"></div>
              
              <img className="camera" src={camera} alt=""></img>
             
               <div className="home-line3 flex1"></div>
              
               
            </div>
            
            <div className="camera-footer"></div>
        </div>
    )
}
export default Camera;