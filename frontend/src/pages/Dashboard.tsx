import React, { useEffect, useState } from 'react'
import { useAuth, useUser } from '@clerk/clerk-react'
import Dnavbar from '../components/DashboardC/Dnavbar'
import MainSec from '../components/DashboardC/MainSec'
import AddHabit from '../components/DashboardC/AddHabit'
import HabitCard from '../components/DashboardC/HabitCard'
import Footer from '../components/Footer'
import StreakCount from '../components/DashboardC/StreakCount'

const API = import.meta.env.VITE_API_URL

interface Habit {
  _id: string
  title: string
  createdAt: string
  completedToday: boolean
  streak: number
  frequency?: string
}

interface Stats {
  currentMomentum: number
  personalRecord: number
}

const Dashboard = () => {
  const { getToken } = useAuth()
  const { user } = useUser()

  const [habits, setHabits] = useState<Habit[]>([])
  const [stats, setStats] = useState<Stats>({ currentMomentum: 0, personalRecord: 0 })

  const fetchHabits = async () => {
    const token = await getToken()
    const res = await fetch(`${API}/api/habits`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data: Habit[] = await res.json()
    setHabits(data)
  }

  const fetchStats = async () => {
    const token = await getToken()
    const res = await fetch(`${API}/api/habits/stats`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data: Stats = await res.json()
    setStats(data)
  }

  useEffect(() => {
    fetchHabits()
    fetchStats()
  }, [])

  const refresh = () => { fetchHabits(); fetchStats() }

  return (
    <>
      <Dnavbar />
      <MainSec habits={habits} />

      {/* ── Controls row: AddHabit left ←→ StreakCount right ── */}
      <div
        className="flex flex-row-reverse justify-between items-start
                   mt-12 mr-[45px] mb-[70px] gap-6
                   max-md:flex-col max-md:mx-4 max-md:mt-6 max-md:mb-8 max-md:gap-4"
      >
        {/* Left column: Forge panel + streak */}
        <div className="flex flex-col gap-4 max-md:w-full">
          {/* Add Habit panel */}
          <div
            className="border-[2.5px] border-[#0a0a0a] w-max p-8 flex flex-col gap-2.5
                       shadow-[5px_5px_0_0_#0a0a0a] bg-[#F8F8F8]
                       max-md:w-full max-md:p-5"
          >
            <div className="font-extrabold text-xl text-[#0a0a0a] tracking-wide">FORGE/NEW</div>
            <div className="flex flex-col gap-1.5">
              <div className="font-extrabold text-[13px] tracking-wider text-[#5c6370]">HABIT IDENTITY</div>
              <AddHabit refresh={refresh} />
            </div>
          </div>

          {/* Streak counter */}
          <StreakCount stats={{ currentMomentum: stats.currentMomentum, personalRecord: stats.personalRecord }} />
        </div>

        {/* Right column: Habit cards */}
        <div className="max-md:w-full">
          <HabitCard habits={habits} refresh={refresh} />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Dashboard
