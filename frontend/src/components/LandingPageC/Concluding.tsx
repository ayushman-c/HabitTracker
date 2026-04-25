import React from 'react'
import { Link } from 'react-router-dom'

const Concluding = () => {
  return (
    <div
      id="concluding"
      className="text-center flex flex-col justify-center items-center py-24 px-6"
      style={{ background: '#F8F8F8' }}
    >
      <div
        className="flex justify-center items-center gap-6 font-black text-[#0a0a0a]
                   leading-tight max-md:flex-col max-md:gap-3"
        style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
      >
        <span>RECLAIM</span>
        <span>YOUR</span>
        <span className="px-3 py-1" style={{ background: '#E0FF00' }}>FOCUS</span>
      </div>

      <Link to="/sign-in">
        <div
          className="font-extrabold text-base tracking-widest mt-14 border-[2.5px] border-[#0a0a0a]
                     text-[#F8F8F8] px-14 py-5
                     shadow-[5px_5px_0_0_#0a0a0a] cursor-pointer w-max
                     transition-[transform,box-shadow] duration-[420ms] ease-out
                     hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]"
          style={{ background: '#2D5BFF' }}
        >
          DEPLOY CORE SYSTEMS
        </div>
      </Link>

      <div className="mt-6 font-extrabold text-xs tracking-[0.2em] text-[#5c6370]">
        JOIN 50,000+ AGENTS OF DISCIPLINE
      </div>
    </div>
  )
}

export default Concluding
