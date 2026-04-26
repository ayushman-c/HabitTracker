import React from 'react'

const Hero = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen px-5 md:px-10"
      style={{ background: '#F8F8F8', paddingTop: '60px' }}
    >
      <div className="flex flex-col items-center text-center gap-4 md:gap-5 py-12 md:py-20 w-full max-w-4xl">

        <div
          className="border-[2.5px] border-[#0a0a0a]
                     px-4 py-1.5 md:px-5 md:py-2
                     font-extrabold text-[10px] md:text-xs tracking-[0.2em] text-[#4a4a4a]"
          style={{ background: '#E0FF00' }}
        >
          STATUS : UNSTOPABLE
        </div>

        <div
          className="flex flex-col items-center font-black leading-none text-[#0a0a0a] mt-1"
          style={{ fontSize: 'clamp(38px, 10vw, 100px)' }}
        >
          <div>BUILD</div>
          <div style={{ color: '#2D5BFF' }}>UNSTOPPABLE</div>
          <div>MOMENTUM</div>
        </div>

        <p
          className="font-bold text-[#5c6370] mt-2 leading-loose tracking-wide
                     max-w-[320px] md:max-w-120"
          style={{ fontSize: 'clamp(11px, 2vw, 14px)' }}
        >
          MODULAR HABIT TRACKING SYSTEM DESIGNED FOR ARCHITECTURAL PRECISION AND ABSOLUTE DISCIPLINE.
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-4 md:mt-5 font-extrabold tracking-wider w-full md:w-auto items-center">
          <a href="#concluding" className="w-full md:w-auto">
            <div
              className="border-[2.5px] border-[#0a0a0a]
                         px-8 py-3.5 w-full md:w-auto
                         text-center text-sm cursor-pointer text-[#F8F8F8]
                         shadow-[5px_5px_0_0_#0a0a0a]
                         transition-[transform,box-shadow] duration-420 ease-out
                         hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]"
              style={{ background: '#2D5BFF' }}
            >
              INITIALIZE CORE
            </div>
          </a>
          <a href="#concluding" className="w-full md:w-auto">
            <div
              className="border-[2.5px] border-[#0a0a0a]
                         px-8 py-3.5 w-full md:w-auto
                         text-center text-sm cursor-pointer text-[#0a0a0a]
                         shadow-[5px_5px_0_0_#0a0a0a]
                         transition-[transform,box-shadow] duration-420 ease-out
                         hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]"
              style={{ background: '#F8F8F8' }}
            >
              VIEW SYSTEMS
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Hero
