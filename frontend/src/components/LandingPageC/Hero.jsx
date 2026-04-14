import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className="hero-main">
        <div className="hero-sub">
            <div className="hero-head-box">STATUS : UNSTOPABLE</div>
            <div className="hero-head">
                <div className="hero-head-line">BUILD</div>
                <div className="hero-head-line-2">UNSTOPABLE</div>
                <div className="hero-head-line">MOMENTUM</div>
            </div>

            <div className="hero-desc">MODULAR HABIT OF TRACKING SYSTEM DESIGNED FOR ARCHITRCTURAL PRECISION AND ABSOLUTE DISCIPLINE.</div>
            <div className="hero-buttons">
                <a href="#concluding">
                <div className="button-1">INITIALIZE CORE</div>
                </a>
                <a href="#concluding">
                <div className="button-2">VIEW SYSTEMS</div>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
