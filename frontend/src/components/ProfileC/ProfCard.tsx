import React from 'react'
import { useUser } from '@clerk/clerk-react'

const ProfCard = () => {
  const { isLoaded, user } = useUser()

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center scale-90">
        <div
          className="w-[90vw] mt-30 border-[2.5px] border-[#0a0a0a]
                     p-6.25 flex justify-start items-center shadow-[5px_5px_0_0_#0a0a0a]"
        >
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center scale-90 mt-10">
      <div
        className="w-[90vw] mt-30 border-[2.5px] border-[#0a0a0a] bg-[#F8F8F8]
                   p-6.25 flex gap-5 justify-start items-center shadow-[5px_5px_0_0_#0a0a0a]
                   max-md:mt-25 max-md:flex-col max-md:p-5 max-md:text-center"
      >
        <div className="flex gap-11.25 max-md:flex-col max-md:gap-5 max-md:align-center">          <img
            src={user?.imageUrl}
            alt="Profile"
            className="h-37.5 w-37.5 object-cover border-[2.5px] border-[#0a0a0a]
                       max-md:h-30 max-md:w-30 max-md:mx-auto"
          />

          <div className="flex flex-col justify-end gap-3.75 max-md:justify-center max-md:items-center max-md:gap-2.5">
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
