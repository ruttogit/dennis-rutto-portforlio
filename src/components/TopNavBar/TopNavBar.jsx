import React from 'react'
import './TopNavBar.css'

function TopNavBar() {
  return (
    <div className='nav-top'>
        <a href="#home"><h1>DENNIS RUTTO</h1></a>
        <a href="#contact"><button className='btn'>Hire Me</button></a>
    </div>
  )
}

export default TopNavBar