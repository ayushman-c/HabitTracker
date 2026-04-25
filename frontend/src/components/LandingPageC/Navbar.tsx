import React, { useState } from 'react'

const NAV_LINKS = ['HOME', 'ABOUT', 'VAULT', 'CONTACT'] as const

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div
        className="flex justify-between items-center h-[72px] px-12
                   border-b-[2.5px] border-[#0a0a0a] bg-[#F8F8F8]
                   fixed top-0 left-0 right-0 z-[1000]
                   md:px-12 px-4 h-[60px] md:h-[72px]"
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

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 font-bold text-sm tracking-wider text-[#5c6370]">
          {NAV_LINKS.map((label) => (
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

        <div className="hidden md:flex items-center gap-4 font-extrabold text-sm cursor-pointer">
          <div
            className="tracking-wider text-[#0a0a0a]
                       transition-transform duration-[420ms] ease-out
                       hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            INITIATE
          </div>
          <a href="#concluding">
            <div
              className="px-5 py-2.5 border-[2.5px] border-[#0a0a0a] font-extrabold tracking-wider
                         bg-[#2D5BFF] text-[#F8F8F8]
                         shadow-[5px_5px_0_0_#0a0a0a]
                         transition-[transform,box-shadow] duration-[420ms] ease-out
                         hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]"
            >
              GET STARTED
            </div>
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2 shrink-0">
          <a href="#concluding">
            
          </a>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex flex-col justify-center items-center shrink-0 w-9 h-9 gap-[5px]
                       border-[2.5px] border-[#0a0a0a] cursor-pointer
                       bg-[#F8F8F8] transition-colors duration-200 hover:bg-[#E0FF00]"
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-[2.5px] bg-[#0a0a0a] transition-all duration-300 origin-center"
              style={menuOpen ? { transform: 'translateY(7.5px) rotate(45deg)' } : {}}
            />
            <span
              className="block w-5 h-[2.5px] bg-[#0a0a0a] transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-5 h-[2.5px] bg-[#0a0a0a] transition-all duration-300 origin-center"
              style={menuOpen ? { transform: 'translateY(-7.5px) rotate(-45deg)' } : {}}
            />
          </button>
        </div>
      </div>

      <div
        className="fixed top-[60px] left-0 right-0 z-[999]
                   border-b-[2.5px] border-[#0a0a0a]
                   flex flex-col overflow-hidden
                   transition-[max-height] duration-[420ms] ease-out md:hidden"
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          background: '#F8F8F8',
        }}
      >
        {NAV_LINKS.map((label, i) => (
          <div
            key={label}
            className="px-6 py-5 font-extrabold text-sm tracking-[0.2em] text-[#5c6370]
                       border-b border-[#e0e0e0] cursor-pointer
                       transition-colors duration-200 hover:bg-[#E0FF00] hover:text-[#0a0a0a]"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-[#2D5BFF] mr-3">{String(i + 1).padStart(2, '0')}</span>
            {label}
          </div>
        ))}

        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{ background: '#E0FF00' }}
        >
          <span className="font-extrabold text-xs tracking-[0.18em] text-[#0a0a0a]">
            INITIATE YOUR JOURNEY
          </span>
          <a href="#concluding" onClick={() => setMenuOpen(false)}>
            <div
              className="px-4 py-2.5 border-[2.5px] border-[#0a0a0a] font-extrabold text-xs tracking-wider
                         shadow-[4px_4px_0_0_#0a0a0a]"
              style={{ background: '#0a0a0a', color: '#F8F8F8' }}
            >
              DEPLOY 
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
