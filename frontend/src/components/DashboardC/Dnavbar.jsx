import React from 'react'
import './Dnavbar.css'
import {useNavigate} from 'react-router-dom'

const Dnavbar = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className="navbar_sub">
           <div className="brand_logo">

                <div className="brand">HABIT TRACKER</div>
                <div className="logo">V 1.0</div>
            </div>

            <div className="dnav_options">
                <div className="dhome">HOME</div>
                <div className="dabout">ABOUT</div>
                <div className="dvault">VAULT</div>
            </div>

            <div className="heading-nav-2" onClick={() => navigate('/profile')}>VIEW PROFILE</div>
        </div>
       
    </>
  )
}

export default Dnavbar
