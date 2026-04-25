import React, { useState } from 'react'
import Footer from '../Footer'
import { SignInButton } from "@clerk/clerk-react"

const INPUT_CLASS = `
  w-full h-11 border-[2.5px] border-[#0a0a0a] pl-4
  font-semibold text-sm text-[#0a0a0a] tracking-wide
  outline-none bg-[#F8F8F8]
  transition-shadow duration-200
  focus:shadow-[3px_3px_0_0_#2D5BFF] focus:border-[#2D5BFF]
  placeholder:text-[#b0b4bb] placeholder:font-normal
`

const Form = () => {
  const [email, setEmail] = useState("")
  const [accessKey, setAccessKey] = useState("")

  return (
    <>
      <div
        className="flex justify-center items-start min-h-screen px-5 pt-[72px] md:pt-[72px]"
        style={{ background: '#F8F8F8' }}
      >
        <div
          className="border-[2.5px] border-[#0a0a0a] shadow-[7px_7px_0_0_#0a0a0a]
                     w-full max-w-[420px] flex flex-col gap-6
                     px-8 py-10 my-14"
          style={{ background: '#F8F8F8' }}
        >

          <div className="flex flex-col gap-1.5">
            <div className="text-[42px] font-black leading-none text-[#0a0a0a]">
              SIGN IN
            </div>
            <div className="text-base font-bold text-[#5c6370] tracking-wide">
              DISCIPLINE STARTS HERE.
            </div>
          </div>

          <div className="h-[2.5px] w-full bg-[#0a0a0a]" />

          <div className="flex flex-col gap-2">
            <label className="font-extrabold text-xs tracking-[0.18em] text-[#5c6370]">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@gmail.com"
              className={INPUT_CLASS}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-extrabold text-xs tracking-[0.18em] text-[#5c6370]">
              ACCESS KEY
            </label>
            <input
              type="password"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              placeholder="••••••••"
              className={INPUT_CLASS}
            />
          </div>

          <div
            className="flex justify-center items-center mt-2 border-[2.5px] border-[#0a0a0a]
                       px-6 py-3.5 font-extrabold text-base tracking-widest
                       text-[#F8F8F8] shadow-[5px_5px_0_0_#0a0a0a] cursor-pointer
                       transition-[transform,box-shadow] duration-[420ms] ease-out
                       hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]
                       active:translate-x-0 active:translate-y-0 active:shadow-none"
            style={{ background: '#2D5BFF' }}
          >
            SIGN IN
          </div>

          <div className="flex justify-center items-center gap-4 mt-1">
            <div className="h-[3px] flex-1" style={{ background: '#0a0a0a' }} />
            <div className="font-bold text-sm text-[#0a0a0a] tracking-widest">OR</div>
            <div className="h-[3px] flex-1" style={{ background: '#0a0a0a' }} />
          </div>

          <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
            <div
              className="flex justify-center items-center gap-4
                         border-[2.5px] border-[#0a0a0a] px-5 py-3.5
                         shadow-[5px_5px_0_0_#0a0a0a] cursor-pointer
                         transition-[transform,box-shadow] duration-[420ms] ease-out
                         hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]
                         active:translate-x-0 active:translate-y-0 active:shadow-none"
              style={{ background: '#F8F8F8' }}
            >
              <div
                className="w-6 h-6 rounded-full border-[2px] border-[#0a0a0a] shrink-0"
                style={{
                  background: 'conic-gradient(#4285F4 0deg 90deg, #EA4335 90deg 180deg, #FBBC05 180deg 270deg, #34A853 270deg 360deg)',
                }}
              />
              <div className="font-extrabold text-sm tracking-wider text-[#0a0a0a]">
                CONTINUE WITH PROVIDER
              </div>
            </div>
          </SignInButton>

          <div className="text-center font-bold text-sm tracking-[0.15em] text-[#5c6370] mt-1">
            JOIN THE GRIND
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Form