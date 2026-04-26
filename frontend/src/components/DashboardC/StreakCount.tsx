import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { useHabitStore } from '../../store/useHabitStore'

const StreakCount = () => {
  const { user } = useUser()
  const stats = useHabitStore((state) => state.stats)

  return (
    <div
      className="border-[2.5px] border-[#0a0a0a] shadow-[5px_5px_0_0_#0a0a0a]
                 px-5 py-8 flex flex-col gap-2.5 h-[311px]
                 max-md:h-auto max-md:px-4 max-md:py-5 max-md:gap-2"
      style={{ background: '#2D5BFF' }}
    >
      <div className="flex flex-col gap-1" style={{ background: 'transparent' }}>
        <div
          className="text-4xl font-extrabold text-[#F8F8F8] pb-2.5
                     max-md:text-2xl max-md:pb-1.5"
          style={{ background: 'transparent' }}
        >
          WELCOME ABOARD
        </div>
        <div
          className="text-2xl font-extrabold text-[#F8F8F8] pt-2.5
                     max-md:text-lg max-md:pt-1.5"
          style={{ background: 'transparent' }}
        >
          {user?.firstName}
        </div>
      </div>

      <div className="flex flex-col gap-1.5" style={{ background: 'transparent' }}>
        <div
          className="text-xl font-bold text-[#F8F8F8] max-md:text-base"
          style={{ background: 'transparent' }}
        >
          CURRENT MOMENTUM
        </div>
        <div className="flex items-baseline gap-3" style={{ background: 'transparent' }}>
          <div
            className="font-extrabold text-[#F8F8F8] leading-none"
            style={{ fontSize: 'clamp(48px, 5vw, 72px)', background: 'transparent' }}
          >
            {stats?.currentMomentum || 0}
          </div>
          <div className="font-extrabold text-[#F8F8F8]" style={{ background: 'transparent' }}>
            DAYS
          </div>
        </div>
      </div>

      <div
        className="font-bold text-[#F8F8F8] border-t-[5px] border-[#F8F8F8] pt-5
                   max-md:pt-3.5 max-md:text-[13px] max-md:border-t-[3px]"
        style={{ background: 'transparent' }}
      >
        PERSONAL RECORD: {stats?.personalRecord || 0} DAYS
      </div>
    </div>
  )
}

export default StreakCount
