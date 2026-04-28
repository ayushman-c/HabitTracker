import React, { useEffect } from 'react'
import Dnavbar from '../components/DashboardC/Dnavbar'
import MainSec from '../components/DashboardC/MainSec'
import AddHabit from '../components/DashboardC/AddHabit'
import HabitCard from '../components/DashboardC/HabitCard'
import Footer from '../components/Footer'
import StreakCount from '../components/DashboardC/StreakCount'
import { useHabitStore } from '../store/useHabitStore'

const Dashboard = () => {
  const fetchHabits = useHabitStore((state) => state.fetchHabits)
  const fetchStats = useHabitStore((state) => state.fetchStats)

  useEffect(() => {
    fetchHabits()
    fetchStats()
  }, [fetchHabits, fetchStats])

  return (
    <>
      <Dnavbar />
      <MainSec />

      <div
        className="flex flex-row-reverse justify-between items-start
                   mt-12 mr-11.25 mb-17.5 gap-6
                   max-md:flex-col max-md:mx-4 max-md:mt-6 max-md:mb-8 max-md:gap-4"
      >
        <div className="flex flex-col gap-4 max-md:w-full">
          <div
            className="border-[2.5px] border-[#0a0a0a] w-max p-8 flex flex-col gap-2.5
                       shadow-[5px_5px_0_0_#0a0a0a] bg-[#F8F8F8]
                       max-md:w-full max-md:p-5"
          >
            <div className="font-extrabold text-xl text-[#0a0a0a] tracking-wide">FORGE/NEW</div>
            <div className="flex flex-col gap-1.5">
              <div className="font-extrabold text-[13px] tracking-wider text-[#5c6370]">HABIT IDENTITY</div>
              <AddHabit />
            </div>
          </div>

          <StreakCount />
        </div>

        <div className="max-md:w-full">
          <HabitCard />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Dashboard
