import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfNav = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-between items-center h-[11vh] px-[45px]
                 border-b-[5px] border-[#0a0a0a] bg-[#F8F8F8]
                 fixed top-0 left-0 right-0 z-[1000]
                 max-md:h-[8vh] max-md:px-4"
    >
      <div
        className="flex shrink-0 shadow-[5px_5px_0_0_#0a0a0a]
                   transition-[transform,box-shadow] duration-[420ms] ease-out
                   hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]"
      >
        <div
          className="px-3 py-1.5 md:px-4 md:py-2
                     border-[2.5px] border-[#0a0a0a]
                     font-extrabold text-[14px] md:text-sm tracking-wider whitespace-nowrap
                     bg-[#E0FF00] text-[#0a0a0a]"
        >
          HABIT TRACKER
        </div>
        <div
          className="px-3 py-1.5 md:px-4 md:py-2
                     border-[2.5px] border-l-0 border-[#0a0a0a]
                     font-extrabold text-[14px] md:text-sm tracking-wider whitespace-nowrap
                     bg-[#2D5BFF] text-[#F8F8F8]"
        >
          V 1.0
        </div>
      </div>

      {/* Back Button */}
      <div
        className="h-[50px] w-[50px] border-[2.5px] border-[#0a0a0a] cursor-pointer
                   bg-[#E0FF00] bg-center bg-no-repeat bg-[length:50%]
                   shadow-[5px_5px_0_0_#0a0a0a]
                   transition-[transform,box-shadow] duration-[420ms] ease-out
                   hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]
                   max-md:h-10 max-md:w-10"
        style={{ backgroundImage: 'url(/src/assets/arrow.png)' }}
        onClick={() => navigate('/dashboard')}
      ></div>
    </div>
  )
}

export default ProfNav