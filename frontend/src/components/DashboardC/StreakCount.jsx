import React from 'react'
import { useUser } from '@clerk/clerk-react'
import './StreakCount.css'

const StreakCount = ({ stats }) => {
  const { user } = useUser()
  
  return (
    <>
        <div className="count-main-box">
            <div className="welcome-msg">
                <div className="welcome">WELCOME ABOARD</div>
                <div className="name">{user?.firstName}</div>
            </div>
            <div className="streak-box">
                <div className="streak-heading">CURRENT MOMENTUM</div>
                <div className="streak-count">
                    <div className="number">{stats?.currentMomentum || 0}</div>
                    <div className="days">DAYS</div>
                </div>
            </div>
            <div className="personal-record">PERSONAL RECORD: {stats?.personalRecord || 0} DAYS</div>
        </div>
    </>
  )
}

export default StreakCount
