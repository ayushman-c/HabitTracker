import React from 'react'
import './Concluding.css'
import { Link } from 'react-router-dom'

const Concluding = () => {
  return (
    <>
        <div className="con-main" id='concluding'>
            <div className="con-head">
                <div className="heads">RECLAIM</div>
                <div className="heads">YOUR</div>
                <div className="heads-1">FOCUS</div>
            </div>
            <Link to="/sign-in">
            <div className="con-button">
                DEPLOY CORE SYSTEMS
            </div>
            </Link>
            <div className="con-desc">JOIN 50,000+ AGENTS OF DICIPLINE</div>
        </div>
    </>
  )
}

export default Concluding
