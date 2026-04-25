import React from 'react'

interface Habit {
  _id: string
  title: string
  completedToday: boolean
}

interface MainSecProps {
  habits: Habit[]
}

const MainSec = ({ habits }: MainSecProps) => {
  const totalHabits = habits?.length || 0
  const completedHabits = habits?.filter(h => h.completedToday).length || 0
  const progressPercent = totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0

  return (
    <div
      className="flex flex-col gap-4 mt-[15.21vh] mx-[45px]
                 max-md:mt-[80px] max-md:mx-4 max-md:gap-3"
    >
      <div
        className="border-[2.5px] border-[#0a0a0a] w-max px-4 py-1.5
                   font-extrabold text-sm text-[#5c6370] shadow-[5px_5px_0_0_#0a0a0a] cursor-pointer
                   transition-[transform,box-shadow] duration-[420ms] ease-out
                   hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]
                   max-md:text-xs"
        style={{ background: '#E0FF00' }}
      >
        DAILY OVERVIEW
      </div>

      <div className="flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-4">

        <div
          className="font-black text-[#0a0a0a] leading-tight"
          style={{ fontSize: 'clamp(32px, 3.885vw, 64px)' }}
        >
          CORE/COMMAND
        </div>

        <div className="flex items-center gap-5 max-md:w-full max-md:justify-between">

          {/* Progress box */}
          <div
            className="flex flex-col gap-1.5 border-[2.5px] border-[#0a0a0a] px-3 py-2.5
                       shadow-[5px_5px_0_0_#0a0a0a] cursor-pointer
                       transition-[transform,box-shadow] duration-[420ms] ease-out
                       hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]
                       bg-[#F8F8F8]"
          >
            <div className="font-extrabold text-[11px] tracking-widest text-[#5c6370] max-md:text-[10px]">
              TOTAL PROGRESS
            </div>
            <div
              className="font-extrabold leading-none"
              style={{ fontSize: 'clamp(26px, 2.5vw, 35px)', color: '#2D5BFF' }}
            >
              {progressPercent}%
            </div>
          </div>

          <div
            className="group h-20 w-20 border-[2.5px] border-[#0a0a0a] flex justify-center items-center
                       shadow-[5px_5px_0_0_#0a0a0a] cursor-pointer overflow-hidden
                       transition-[transform,box-shadow] duration-[420ms] ease-out
                       hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]
                       max-md:h-[60px] max-md:w-[60px]"
            style={{ background: '#E0FF00' }}
          >
            <div
              className="h-full w-full animate-gear bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/src/assets/gear.png)',
                backgroundSize: '50%',
                background: '#E0FF00',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSec
