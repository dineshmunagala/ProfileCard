import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import styles from '../styles/Dashboard.css'

const DashboardLayout = ({children}) => {
  return (
    <div className='dash-container'>
        <Sidebar />

        <div className='dash-main'>
            <Topbar />
       
        <div className='dash-content'>{children}</div>
       </div>
    </div>
  )
}

export default DashboardLayout