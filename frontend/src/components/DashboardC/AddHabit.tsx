import React from 'react'
import { useState } from 'react'
import { useHabitStore } from '../../store/useHabitStore'

const AddHabit = () => {
  const [title, setTitle] = useState('')
  const addHabit = useHabitStore((state) => state.addHabit)

  const handleAdd = async () => {
    if (!title) return
    await addHabit(title)
    setTitle('')
  }

  return (
    <div className="flex flex-col gap-[19px] w-[30vw] max-md:w-full max-md:gap-[14px]">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        placeholder="Ex. GO TO THE GYM"
        className="h-10 w-full border-[2.5px] border-[#0a0a0a] pl-4
                   font-bold text-sm uppercase tracking-wide bg-[#F8F8F8] text-[#0a0a0a]
                   outline-none placeholder:text-[#b0b4bb] placeholder:normal-case
                   focus:shadow-[3px_3px_0_0_#2D5BFF] focus:border-[#2D5BFF]
                   transition-shadow duration-200
                   max-md:text-[14px]"
      />

      <button
        onClick={handleAdd}
        className="h-10 w-full border-[2.5px] border-[#0a0a0a] font-extrabold text-base
                   bg-[#E0FF00] text-[#0a0a0a] cursor-pointer tracking-wider
                   shadow-[5px_5px_0_0_#0a0a0a]
                   transition-[transform,box-shadow] duration-[420ms] ease-out
                   hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a0a0a]
                   active:translate-x-0 active:translate-y-0 active:shadow-none
                   max-md:h-[46px] max-md:text-[15px]"
      >
        INITIATE HABIT
      </button>
    </div>
  )
}

export default AddHabit
