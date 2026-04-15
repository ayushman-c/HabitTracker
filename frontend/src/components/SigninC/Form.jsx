import React, { useState } from 'react'
import './Form.css'
import Footer from '../Footer'
import { SignInButton } from "@clerk/clerk-react"


const Form = () => {
  const [email, setEmail] = useState("");
  const [accessKey, setAccessKey] = useState("");

  return (
    <>
      <div className="signin-main">
        <div className="signin-sub">

          <div className="signin-heads">
            <div className="signin-big">SIGN IN</div>
            <div className="signin-small">DISCIPLINE STARTS HERE.</div>
          </div>

          {/* Email */}
          <div className="signin-form-1">
            <div className="form-1-head">EMAIL ADDRESS</div>
            <div className='form-1-box'>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youremail@gmail.com"
              />
            </div>
          </div>

          {/* Access Key */}
          <div className="signin-form-1">
            <div className="form-1-head">ACCESS KEY</div>
            <div className='form-1-box'>
              <input 
                type="password"
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                placeholder="********"
              />
            </div>
          </div>

          {/* Button */}
          <div className="sign-in-button">
            <div className="sign-in-sub">
              SIGN-IN
            </div>
          </div>

          <div className="or-box">
            <div className="parts"></div>
            <div className="parts-1">OR</div>
            <div className="parts"></div>
          </div>

          <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
            <div className="provider-box">
              <div className="provided-pic"></div>
              <div className="provided-name">CONTINUE WITH PROVIDER</div>
            </div>
          </SignInButton>

          <div className="tagline">JOIN THE GRIND</div>

        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Form