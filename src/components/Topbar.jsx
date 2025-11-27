import React from 'react'
import { FiBell } from "react-icons/fi";


const Topbar = () => {
  return (
    <div className='topbar'>
        <input type="text"
        placeholder='Search Members'
        className='topbar-search'
        />

        <button className='topbar-add'>+Add Member</button>
        <FiBell className='topbar-icon'/>

        <img src="" alt="user" className='topbar-avatar' />      
    </div>

    
  )
}

export default Topbar
