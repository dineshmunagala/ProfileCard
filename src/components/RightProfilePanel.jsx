import React from 'react'
import { FiPhone, FiMail, FiMapPin, FiX } from "react-icons/fi";

const RightProfilePanel = ({member,onClose}) => {
    if (!member) return null;

  return (
    <div className='right-panel'>
        <div className='panel-header'>
            <h2>Profile Details</h2>
            <FiX onClick={onClose} className='panel-close'/>
        </div>  
        <img src={member.image} alt={member.name} className='panel-photo' />

        <h2 className='panel-name'>{member.name}</h2>
        <p className='panel-role'>{member.role}</p>
        <p className='panel-experience'>{member.experience}</p>
        
        <div className='panel-icons'>
             <FiPhone/>
             <FiMail/>
            <FiMapPin/>
        </div>
        <div className='panel-block'>
            <h4>About</h4>
            <p>{member.bio}</p>
        </div>
        
    </div>
  )
}

export default RightProfilePanel
