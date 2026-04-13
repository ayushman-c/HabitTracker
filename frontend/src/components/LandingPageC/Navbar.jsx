import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
        <div className="navbar_main">
            <div className="brand_logo">

                <div className="brand">HABIT TRACKER</div>
                <div className="logo">V 1.0</div>
            </div>
            <div className="nav_options">
                <div className="home">HOME</div>
                <div className="about">ABOUT</div>
                <div className="vault">VAULT</div>
                <div className="contact">CONTACT</div>
            </div>
            <div className="sign_in">
                <div className="sign_up">INITIATE</div>
                <div className="login">GET STARTED</div>
            </div>
        </div>
    </>
  )
}

export default Navbar
