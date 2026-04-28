import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Footer from '../Footer'
import { setToken } from '../../utils/auth'

const INPUT_CLASS = `
  w-full h-11 border-[2.5px] border-[#0a0a0a] pl-4
  font-semibold text-sm text-[#0a0a0a] tracking-wide
  outline-none bg-[#F8F8F8]
  transition-shadow duration-200
  focus:shadow-[3px_3px_0_0_#2D5BFF] focus:border-[#2D5BFF]
  placeholder:text-[#b0b4bb] placeholder:font-normal
`

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const Form = () => {
  const [email, setEmail] = useState("")
  const [accessKey, setAccessKey] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!email || !accessKey) {
      toast.error('Email and password are required')
      return
    }

    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password: accessKey }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Unable to login')
      }

      setToken(data.token)
      toast.success('Signed in successfully')
      navigate('/dashboard')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

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
              PASSWORD
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
            onClick={handleLogin}
          >
            SIGN IN
          </div>

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