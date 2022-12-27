import React from 'react';
import ProfileHeader from './Header/ProfileHeader';
import New from './New/New';
import './Profile.css';
import userplus from '../img/user-plus.png';
import usergroup from '../img/users-3.png';
import ContactFreq from './ContactFreq/ContactFreq';
import ProfileFooter from './ProfileFooter/ProfileFooter';
const Profile = () =>{
return(
    <div className='p-wrap'>
        
       <ProfileHeader/>
       <New emojy={userplus} title={"New contact"}/>
       <New emojy={usergroup} title={"New group"}/>
       
       <p className='c-f'>CONTACTED FREQUENTLY</p>
       
       <ContactFreq/>
     
       <ProfileFooter/>
      
    </div>
)
}
export default Profile;