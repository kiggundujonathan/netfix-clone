import React from 'react'
import image from './images/ivo .jpeg'
import './Nav.css'
function Nav() {
  return (
    <div className="nav">
        <img
        className="nav__logo"
        src={image}
        alt= "Netflix Logo"
        />
       
    </div>
  )
}

export default Nav