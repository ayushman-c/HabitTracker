import React from 'react'
import './AddHabit.css'

import { useState } from "react";
import { useAuth } from "@clerk/clerk-react";


const API = import.meta.env.VITE_API_URL


const AddHabit = ({ refresh }) => {
  const [title, setTitle] = useState("");
  const { getToken } = useAuth();

  const handleAdd = async () => {
    if (!title) return;

    const token = await getToken();

    await fetch(`${API}/api/habits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    refresh();
  };

  return (
    <>
    <div className="overall">
    <div className='add-habit-div'>
      <div className="habit-sub">
        <div className="habit-input">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ex. GO TO THE GYM"
      /></div>
        <div className="habit-button">
      <button onClick={handleAdd}>INITIATE HABIT</button>
        </div>
        </div>
    </div>

      

    </div>
    </>
  );
};

export default AddHabit;
