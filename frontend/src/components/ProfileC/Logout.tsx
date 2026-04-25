import React from 'react'
import { useClerk } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const { signOut } = useClerk()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="flex justify-center items-center my-5">
      <div className="w-[90vw] border-[2.5px] border-[#0a0a0a] shadow-[5px_5px_0_0_#0a0a0a]">
        <div
          className="p-[30px_20px] flex justify-between items-center bg-[#f75d5d]
                     max-md:flex-col max-md:gap-5 max-md:text-center max-md:p-[25px_15px]"
        >
          <div className="bg-[#f75d5d]">
            <div className="text-[30px] font-extrabold bg-[#f75d5d] text-[#0a0a0a] max-md:text-[24px]">
              DANGER ZONE
            </div>
            <div className="mt-2.5 font-extrabold bg-[#f75d5d] text-[#0a0a0a]">
              LOGOUT FROM YOUR ACCOUNT
            </div>
          </div>

          <div
            className="font-extrabold border-[2.5px] border-[#0a0a0a] p-[15px_30px]
                       bg-[#fc8b8b] text-[#0a0a0a] shadow-[5px_5px_0_0_#0a0a0a] cursor-pointer
                       transition-[transform,box-shadow,background-color] duration-[420ms] ease-out
                       hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_0_#0a0a0a] hover:bg-[#ff7878]
                       max-md:w-full max-md:max-w-[200px] max-md:p-[12px_20px]"
            onClick={handleLogout}
          >
            LOGOUT
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logout
