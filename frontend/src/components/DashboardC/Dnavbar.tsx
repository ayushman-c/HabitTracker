import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dnavbar = () => {
  const navigate = useNavigate()

  return (
    <div
      className="flex justify-between items-center h-[72px] px-12
                 border-b-[2.5px] border-[#0a0a0a] bg-[#F8F8F8]
                 fixed top-0 left-0 right-0 z-[1000]
                 max-md:h-[60px] max-md:px-5"
    >
      <div
        className="flex shrink-0 shadow-[5px_5px_0_0_#0a0a0a]
                   transition-[transform,box-shadow] duration-[420ms] ease-out
                   hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]"
      >
        <div className="px-3 py-1.5 md:px-4 md:py-2 border-[2.5px] border-[#0a0a0a]
                        font-extrabold text-[11px] md:text-sm tracking-wider whitespace-nowrap bg-[#E0FF00] text-[#0a0a0a]">
                          HABIT TRACKER
        </div>
        <div className="px-3 py-1.5 md:px-4 md:py-2 border-[2.5px] border-l-0 border-[#0a0a0a]
                        font-extrabold text-[11px] md:text-sm tracking-wider whitespace-nowrap bg-[#2D5BFF] text-[#F8F8F8]">
          V 1.0
        </div>
      </div>

      <div className="hidden md:flex items-center gap-10 font-bold text-sm tracking-wider text-[#5c6370]">
        {(['HOME', 'ABOUT', 'VAULT'] as const).map((label) => (
          <div
            key={label}
            className="relative cursor-pointer
                       transition-colors duration-[420ms] ease-out hover:text-[#0a0a0a]
                       after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2
                       after:w-0 after:h-[2.5px] after:bg-[#0a0a0a]
                       after:transition-[width] after:duration-[420ms] after:ease-out
                       hover:after:w-full"
          >
            {label}
          </div>
        ))}
      </div>

      <div
        className="relative cursor-pointer font-bold text-sm tracking-wider text-[#5c6370]
                   transition-colors duration-[420ms] ease-out hover:text-[#0a0a0a]
                   after:content-[''] after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2
                   after:w-0 after:h-[2.5px] after:bg-[#0a0a0a]
                   after:transition-[width] after:duration-[420ms] after:ease-out
                   hover:after:w-full
                   max-md:text-xs"
        onClick={() => navigate('/profile')}
      >
        VIEW PROFILE
      </div>
    </div>
  )
}

export default Dnavbar
