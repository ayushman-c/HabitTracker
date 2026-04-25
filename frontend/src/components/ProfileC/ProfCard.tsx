import React from 'react'
import { useUser } from '@clerk/clerk-react'

const ProfCard = () => {
  const { isLoaded, user } = useUser()

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center scale-90">
        <div
          className="w-[90vw] mt-[120px] border-[2.5px] border-[#0a0a0a]
                     p-[25px] flex justify-start items-center shadow-[5px_5px_0_0_#0a0a0a]"
        >
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center scale-90 mt-10">
      <div
        className="w-[90vw] mt-[120px] border-[2.5px] border-[#0a0a0a] bg-[#F8F8F8]
                   p-[25px] flex gap-5 justify-start items-center shadow-[5px_5px_0_0_#0a0a0a]
                   max-md:mt-[100px] max-md:flex-col max-md:p-5 max-md:text-center"
      >
        <div className="flex gap-[45px] max-md:flex-col max-md:gap-5 max-md:align-center">          <img
            src={user?.imageUrl}
            alt="Profile"
            className="h-[150px] w-[150px] object-cover border-[2.5px] border-[#0a0a0a]
                       max-md:h-[120px] max-md:w-[120px] max-md:mx-auto"
          />

          <div className="flex flex-col justify-end gap-[15px] max-md:justify-center max-md:items-center max-md:gap-2.5">
            <div className="font-extrabold text-[#2D5BFF] tracking-wider text-sm">
              CORE IDENTITY
            </div>
            <div className="font-extrabold text-3xl text-[#0a0a0a] max-md:text-2xl leading-none">
              {user?.fullName || 'User'}
            </div>
            <div className="font-bold text-base text-[#5c6370]">
              {user?.primaryEmailAddress?.emailAddress}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfCard
