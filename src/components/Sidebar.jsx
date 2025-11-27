import React from 'react'
import { FiHome, FiUsers, FiPlus, FiSettings, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-logo'>
            <img src="" alt="logo" />
            <h2>Profile Card</h2>
        </div>
        <ul className='side-menu'>
            <li><Link to="/"><FiHome/>Dashboard</Link></li>
            <li><Link to="/profiles"><FiUsers/> Profiles</Link></li>
            <li><Link to="/add-member"><FiPlus/> Add Member</Link></li>
            <li><Link to="/settings"><FiSettings/> Settings</Link></li>
            <li><Link to="/logout"><FiLogOut/> Logout</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar
