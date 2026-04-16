import React from 'react'
import './ProfNav.css'
import { useNavigate } from 'react-router-dom'

const ProfNav = () => {
  const navigate = useNavigate();

  return (
    <>
        <div className="navbar_sub">
           <div className="brand_logo">

                <div className="brand">HABIT TRACKER</div>
                <div className="logo">V 1.0</div>
            </div>

            <div className="back" onClick={() => navigate('/dashboard')}></div>

        </div>
    </>
  )
}

export default ProfNav
 