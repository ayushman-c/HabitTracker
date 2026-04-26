import React from 'react'

const Footer = () => {
  return (
    <div
      className="flex justify-center items-center flex-wrap gap-6
                 border-t-[5px] border-[#0a0a0a]
                 pt-8 pb-8 px-6
                 max-md:flex-col max-md:items-center max-md:gap-5 max-md:px-4"
      style={{ background: '#F8F8F8' }}
    >
      <div
        className="w-[33%] flex justify-center items-center
                   font-extrabold tracking-widest text-sm text-[#0a0a0a]
                   max-md:w-full max-md:justify-center"
      >
        HABIT TRACKER
      </div>

      <div
        className="w-[33%] flex justify-center items-center gap-5 flex-wrap
                   max-md:w-full max-md:justify-center max-md:gap-4"
      >
        {(['TERMS', 'PRIVACY', 'SUPPORT', 'TWITTER'] as const).map((label) => (
          <div
            key={label}
            className="relative font-bold text-sm tracking-wider text-[#5c6370] cursor-pointer
                       transition-colors duration-[420ms] ease-out hover:text-[#0a0a0a]
                       after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2
                       after:w-0 after:h-[2.5px] after:bg-[#0a0a0a]
                       after:transition-[width] after:duration-[420ms] after:ease-out
                       hover:after:w-full"
          >
            {label}
          </div>
        ))}
      </div>

      <div
        className="w-[33%] flex justify-center items-center
                   font-extrabold text-xs tracking-wider text-[#0a0a0a]
                   max-md:w-full max-md:justify-center max-md:text-center"
      >
        © 2024 HABIT/CORE. DISCIPLINE IS FREEDOM.
      </div>
    </div>
  )
}

export default Footer
