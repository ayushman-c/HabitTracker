import React, { useEffect } from 'react'
import { useHabitStore } from '../../store/useHabitStore'

const CheckCircleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const FlameIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
)

const TrendingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
    <circle cx="9" cy="21" r="1" strokeWidth="0" style={{ fill: 'currentColor', stroke: 'none' }} />
  </svg>
)

interface StatCardProps {
  variant: 'blue' | 'yellow' | 'green'
  label: string
  value: string
  suffix: string | null
  icon: 'check' | 'flame' | 'trending'
}

const StatCard = ({ variant, label, value, suffix, icon }: StatCardProps) => {
  const iconMap = {
    check: <CheckCircleIcon />,
    flame: <FlameIcon />,
    trending: <TrendingIcon />,
  }

  const bgColors = {
    blue: '#2b5ff5',
    yellow: '#d4e829',
    green: '#4dffa0',
  }

  const isDark = variant === 'blue'

  return (
    <div
      className="relative w-87.5 h-50 border-[3px] border-[#111] rounded-md
                 p-[18px_20px] flex flex-col justify-between shadow-[4px_4px_0_#111]
                 transition-[transform,box-shadow] duration-150 ease-out cursor-default overflow-hidden
                 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111]
                 max-md:w-full max-md:max-w-[320px] max-md:h-45"
      style={{ backgroundColor: bgColors[variant] }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(0, 0, 0, 0.03) 18px, rgba(0, 0, 0, 0.03) 19px)'
        }}
      />
      <div className="flex items-center justify-between relative z-10" style={{ background: 'transparent' }}>
        <span
          className="font-bold tracking-[0.12em] uppercase max-md:text-[16px]"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '18px',
            color: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(20, 20, 20, 0.75)',
            background: 'transparent'
          }}
        >
          {label}
        </span>
        <span
          className="flex items-center justify-center w-7 h-7"
          style={{
            color: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(20, 20, 20, 0.7)',
            background: 'transparent'
          }}
        >
          {iconMap[icon]}
        </span>
      </div>
      <div
        className="flex items-end leading-none gap-0 relative z-10 max-md:text-[48px]"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '58px',
          letterSpacing: '0.01em',
          color: isDark ? '#ffffff' : '#111111',
          background: 'transparent'
        }}
      >
        {value}
        {suffix && (
          <span
            className="font-black tracking-wider mb-2 ml-0.5"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '22px',
              background: 'transparent'
            }}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  )
}

const StatCards = () => {
  const habits = useHabitStore((state) => state.habits)
  const stats = useHabitStore((state) => state.stats)
  const fetchHabits = useHabitStore((state) => state.fetchHabits)
  const fetchStats = useHabitStore((state) => state.fetchStats)
  const isLoading = useHabitStore((state) => state.isLoading)

  useEffect(() => {
    fetchHabits()
    fetchStats()
  }, [fetchHabits, fetchStats])

  const totalHabits = habits.length
  const longestStreak = stats.personalRecord || 0
  const completedToday = habits.filter(h => h.completedToday).length
  const completionRate = totalHabits > 0
    ? Math.round((completedToday / totalHabits) * 100)
    : 0

  const cards: StatCardProps[] = [
    {
      variant: 'blue',
      label: 'Total Habits',
      value: totalHabits.toString(),
      suffix: null,
      icon: 'check',
    },
    {
      variant: 'yellow',
      label: 'Longest Streak',
      value: longestStreak.toString(),
      suffix: 'D',
      icon: 'flame',
    },
    {
      variant: 'green',
      label: 'Completion Today',
      value: `${completionRate}%`,
      suffix: null,
      icon: 'trending',
    },
  ]

  if (isLoading && habits.length === 0) {
    return (
      <div className="flex justify-center items-center mt-6.25">
        <div className="flex p-6 w-[90vw] justify-evenly max-md:flex-col max-md:items-center max-md:gap-6.25 max-md:scale-90 max-md:p-4">
          <div className="relative w-87.5 h-50 border-[3px] border-[#111] rounded-md flex justify-center items-center font-bold text-lg max-md:w-full max-md:max-w-[320px]">Loading...</div>
          <div className="relative w-87.5 h-50 border-[3px] border-[#111] rounded-md flex justify-center items-center font-bold text-lg max-md:w-full max-md:max-w-[320px]">Loading...</div>
          <div className="relative w-87.5 h-50 border-[3px] border-[#111] rounded-md flex justify-center items-center font-bold text-lg max-md:w-full max-md:max-w-[320px]">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center mt-6.25">
      <div className="flex p-6 w-[90vw] justify-evenly max-md:flex-col max-md:items-center max-md:gap-6.25 max-md:scale-90 max-md:p-4">
        {cards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>
    </div>
  )
}

export default StatCards
