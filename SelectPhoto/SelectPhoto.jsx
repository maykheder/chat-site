import React from "react";
import './SelectPhoto.css';
import a from '../img/hubert-mousseigne-hbEty-2.png';
import b from '../img/joseph-barrientos-Ji_G-2.png';
import c from '../img/rezaul-karim-3.png';
import g from '../img/k.webp';
import h from '../img/w.webp';
import f from '../img/d.webp';
import Address from "../Profile/ContactFreq/Address";
import 'swiper/css'
import {Swiper,SwiperSlide} from 'swiper/react'
const SelectPhoto = ()=>{
    const images=[
        {n:a},{n:b},{n:c}
    ];
   
    return(
        <div className="p-wrap">
            <div className="portfolio">
                <Swiper
                 spaceBetween={16}
                 slidesPerView={1}
                 grabCursor={true}
                 className='portfolio-slider'
                 >
                    {images.map((item)=>( 
                
                    <SwiperSlide><img src={item.n} alt=""></img></SwiperSlide>
                
                
            ))}
                 </Swiper>
            
            </div>
           
           
           
          <div className="send">
            <p>Send at resent contacts</p>
            <Address personPic={g} personName={"Hannah mo"}/>
            <Address personPic={h} personName={"Janet Fowler"}/>
            <Address personPic={f} personName={"Jason Dunn"}/>
          </div>
          <button className="Delete">Delete</button>
          <div className="home-line4"></div>
        </div>
    )
}
 export default SelectPhoto;