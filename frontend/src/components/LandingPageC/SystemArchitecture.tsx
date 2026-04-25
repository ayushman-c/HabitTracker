import React from 'react'

const BOX_HOVER = "transition-[transform,box-shadow] duration-[420ms] ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]"

const SystemArchitecture = () => {
  return (
    <div className="flex flex-col py-16 px-10 max-md:px-5">

      <div
        className="text-[clamp(22px,2.5vw,34px)] font-extrabold tracking-wider
                   border-l-[10px] border-[#2D5BFF] pl-6 ml-4 text-[#0a0a0a]
                   max-md:text-xl max-md:ml-1 max-md:pl-4"
      >
        SYSTEM ARCHITECTURE
      </div>

      <div className="flex justify-center items-stretch mt-10 gap-6 max-md:flex-col">

        {/* Box 1 — wide (2/3) */}
        <div className={`bg-[#F8F8F8] flex-[2] border-[2.5px] border-[#0a0a0a] shadow-[5px_5px_0_0_#0a0a0a] ${BOX_HOVER}`}>
          <div className="p-10 flex flex-col gap-4 max-md:p-6">
            <div className="font-extrabold text-[11px] tracking-[0.2em] text-[#2D5BFF] uppercase">01 / Foundation</div>
            <div className="text-[clamp(22px,2.4vw,32px)] font-extrabold text-[#0a0a0a] leading-tight">THE CORE FOUNDATION</div>
            <div
              className="h-[160px] border-[2.5px] border-[#0a0a0a] flex justify-center items-center"
              style={{ background: '#0a0a0a' }}
            >
              <div
                className="border-[4px] border-[#E0FF00] px-6 py-3 text-base font-extrabold tracking-widest text-[#F8F8F8]"
                style={{ background: '#0a0a0a' }}
              >
                REAL-TIME SYNC ACTIVE
              </div>
            </div>
            <div className="font-bold text-sm text-[#5c6370] leading-loose tracking-wide mt-1">
              OUR PROPRIETARY TRACKING ENGINE PROCESSES YOUR HABITS WITH MILLISECOND LATENCY.
              NO LAG BETWEEN DECISION AND DOCUMENTATION.
            </div>
          </div>
        </div>

        <div
          className={`flex-1 border-[2.5px] border-[#0a0a0a] shadow-[5px_5px_0_0_#0a0a0a] ${BOX_HOVER}`}
          style={{ background: '#E0FF00' }}
        >
          <div className="p-10 flex flex-col gap-4 max-md:p-6" style={{ background: '#E0FF00' }}>
            <div className="font-extrabold text-[11px] tracking-[0.2em] text-[#5c6370] uppercase" style={{ background: '#E0FF00' }}>02 / Feedback</div>
            <div className="text-[clamp(22px,2vw,30px)] font-extrabold text-[#0a0a0a] leading-tight" style={{ background: '#E0FF00' }}>SIGNAL CLARITY</div>
            <div className="font-bold text-sm text-[#5c6370] leading-loose tracking-wide mt-1" style={{ background: '#E0FF00' }}>
              VISUAL SIGNALS THAT BYPASS COGNITIVE LOAD. RED MEANS FAIL. LIME MEANS WIN. TERTIARY MEANS GROWTH.
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-stretch mt-6 gap-6 max-md:flex-col">

        <div
          className={`flex-1 border-[2.5px] border-[#0a0a0a] shadow-[5px_5px_0_0_#0a0a0a] ${BOX_HOVER}`}
          style={{ background: '#00F5A0' }}
        >
          <div className="p-10 flex flex-col gap-4 max-md:p-6" style={{ background: '#00F5A0' }}>
            <div className="font-extrabold text-[11px] tracking-[0.2em] text-[#5c6370] uppercase" style={{ background: '#00F5A0' }}>03 / Momentum</div>
            <div className="text-[clamp(22px,2vw,30px)] font-extrabold text-[#0a0a0a] leading-tight" style={{ background: '#00F5A0' }}>STREAK LOCK</div>
            <div className="font-bold text-sm text-[#5c6370] leading-loose tracking-wide" style={{ background: '#00F5A0' }}>
              HARD-CODED COMMITMENT PROTOCOLS. ONCE A STREAK REACHES LEVEL 5, IT BECOMES A PERMANENT LIFESTYLE NODE.
            </div>
            <div className="flex items-center gap-2 mt-3" style={{ background: '#00F5A0' }}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-8 w-14 border-[2.5px] border-[#0a0a0a]" style={{ background: '#0a0a0a' }} />
              ))}
              <div className="h-8 w-14 border-[2.5px] border-[#0a0a0a]" style={{ background: '#00F5A0' }} />
            </div>
          </div>
        </div>

        <div
          className={`flex-[2] border-[2.5px] border-[#0a0a0a] shadow-[5px_5px_0_0_#0a0a0a] bg-[#F8F8F8] ${BOX_HOVER}`}
        >
          <div className="p-10 flex flex-col gap-4 max-md:p-6">
            <div className="font-extrabold text-[11px] tracking-[0.2em] text-[#2D5BFF] uppercase">04 / Archive</div>
            <div className="text-[clamp(22px,2vw,30px)] font-extrabold text-[#0a0a0a] leading-tight">ETERNAL LEDGER</div>
            <div className="font-bold text-sm text-[#5c6370] leading-loose tracking-wide">
              YOUR PROGRESS IS IMMUTABLE. WE PROVIDE A SURGICAL LOOK BACK AT YOUR EVOLUTION ACROSS MONTHS AND YEARS.
            </div>
            <div className="flex items-end gap-2 mt-2 max-md:hidden" style={{ height: '56px' }}>
              {[45, 60, 75, 90].map((h, i) => (
                <div
                  key={i}
                  className="w-6 border-[2.5px] border-[#0a0a0a]"
                  style={{ height: `${h}%`, background: '#2D5BFF' }}
                />
              ))}
            </div>
            <div
              className="font-black text-[#F8F8F8] border-[2.5px] border-[#0a0a0a]
                         w-max px-5 py-2.5 mt-2 text-sm tracking-widest"
              style={{ background: '#0a0a0a' }}
            >
              ACCESS ARCHIVES
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SystemArchitecture
