import React from 'react'
import { useHabitStore } from '../../store/useHabitStore'

const HabitCard = () => {
  const habits = useHabitStore((state) => state.habits)
  const toggleHabit = useHabitStore((state) => state.toggleHabit)

  const handleToggle = async (habitId: string) => {
    await toggleHabit(habitId)
  }

  return (
    <div className="flex justify-center items-center max-md:justify-center">
      <div
        className="border-[2.5px] border-[#0a0a0a] p-10 ml-[45px] mb-5
                   shadow-[5px_5px_0_0_#0a0a0a] w-[52vw] bg-[#F8F8F8]
                   max-md:w-[calc(100vw-10px)] max-md:ml-0 max-md:p-4 max-md:mb-5"
      >
        <div className="font-extrabold text-4xl text-[#0a0a0a] mb-8 max-md:text-2xl max-md:mb-4">
          DAILY/PROTOCOL
        </div>

        <div className="flex flex-col">
          {habits.map((habit) => {
            const formattedTime = new Date(habit.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })

            return (
              <div
                key={habit._id}
                className="mt-4 border-[2.5px] border-[#0a0a0a] flex items-center justify-between
                           w-[45.458vw] px-4 py-2 gap-[50px] bg-[#F8F8F8]
                           shadow-[5px_5px_0_0_#0a0a0a]
                           transition-[transform,box-shadow] duration-200 ease-in
                           hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]
                           max-md:w-full max-md:gap-3 max-md:px-3 max-md:py-3"
              >
                <div
                  className="flex justify-center items-center gap-8 cursor-pointer max-md:gap-4"
                  onClick={() => handleToggle(habit._id)}
                >
                  <div
                    className={`h-6 w-6 min-w-[24px] border-[2.5px] border-[#0a0a0a] relative
                                transition-colors duration-300
                                ${habit.completedToday ? 'animate-habit-done' : ''}`}
                    style={habit.completedToday ? { background: '#00F5A0' } : { background: '#F8F8F8' }}
                  >
                    {habit.completedToday && (
                      <span
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                   font-extrabold text-base text-[#0a0a0a]"
                        style={{ background: 'transparent' }}
                      >
                        ✓
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <div
                      className={`text-lg font-extrabold uppercase tracking-wide transition-all duration-300
                                  max-md:text-sm
                                  ${habit.completedToday ? 'text-[#5c6370] line-through opacity-70' : 'text-[#0a0a0a]'}`}
                    >
                      {habit.title}
                    </div>
                    <div className="text-sm font-extrabold uppercase text-[#5c6370] max-md:text-[11px]">
                      {formattedTime} • {(habit.frequency || 'daily').toUpperCase()}
                    </div>
                  </div>
                </div>

                <div
                  className="h-[30px] px-4 border-[2.5px] border-[#0a0a0a]
                             font-extrabold text-xs text-[#0a0a0a] uppercase whitespace-nowrap
                             flex justify-center items-center
                             max-md:h-9 max-md:text-[11px] max-md:px-2.5"
                  style={{ background: '#00F5A0' }}
                >
                  STREAK: {habit.streak || 0}D
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HabitCard
