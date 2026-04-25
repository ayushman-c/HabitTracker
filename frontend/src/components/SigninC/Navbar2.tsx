import React from 'react'

const Navbar2 = () => {
  return (
    <div
      className="flex justify-between items-center h-[72px] px-12
                 border-b-[2.5px] border-[#0a0a0a] bg-[#F8F8F8]
                 fixed top-0 left-0 right-0 z-[1000]
                 max-md:h-[60px] max-md:px-5"
    >
      <div
        className="flex shrink-0 shadow-[4px_4px_0_0_#0a0a0a] md:shadow-[5px_5px_0_0_#0a0a0a]
                   transition-[transform,box-shadow] duration-[420ms] ease-out
                   hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]"
      >
        <div
          className="px-3 py-1.5 md:px-4 md:py-2
                     border-[2.5px] border-[#0a0a0a]
                     font-extrabold text-[11px] md:text-sm tracking-wider whitespace-nowrap
                     bg-[#E0FF00] text-[#0a0a0a]"
        >
          HABIT TRACKER
        </div>
        <div
          className="px-3 py-1.5 md:px-4 md:py-2
                     border-[2.5px] border-l-0 border-[#0a0a0a]
                     font-extrabold text-[11px] md:text-sm tracking-wider whitespace-nowrap
                     bg-[#2D5BFF] text-[#F8F8F8]"
        >
          V 1.0
        </div>
      </div>

      
    </div>
  )
}

export default Navbar2
