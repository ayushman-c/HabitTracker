import React from 'react'
import './ProfCard.css'
import { useUser } from '@clerk/clerk-react'

const ProfCard = () => {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return (
        <div className="card-main">
            <div className="card-sub">
                Loading...
            </div>
        </div>
    );
  }

  return (
    <>
        <div className="card-main">
            <div className="card-sub">
                <div className="subsub">
                <img src={user?.imageUrl} alt="Profile" className="pfp" />
                <div className="pfp-desc">
                    <div className="identity">CORE IDENTITY</div>
                    <div className="name-pfp">{user?.fullName || "User"}</div>
                    <div className="deciplinary">{user?.primaryEmailAddress?.emailAddress}</div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default ProfCard
