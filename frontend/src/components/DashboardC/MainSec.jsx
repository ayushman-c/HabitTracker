import React from 'react'
import './MainSec.css'

const MainSec = ({ habits }) => {
  const totalHabits = habits?.length || 0;
  const completedHabits = habits?.filter(h => h.completedToday).length || 0;
  const progressPercent = totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0;

  return (
    <>
        <div className="heading-main">
            <div className="heading-small-box">DAILY OVERVIEW</div>
            <div className="heading-big">
                <div className="main-heading">CORE/COMMAND</div>
                <div className="sub-heading">
                    <div className="progress">
                        <div className="progress-head">TOTAL PROGRESS</div>
                        <div className="progress-num">{progressPercent}%</div>
                    </div>
                    <div className="add">
                        <div className="gear-icon"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainSec
