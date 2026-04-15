import React from 'react'
import './HabitCard.css'

import { useAuth } from "@clerk/clerk-react";

const API = import.meta.env.VITE_API_URL

const HabitCard = ({ habits, refresh }) => {
  const { getToken } = useAuth();

  const toggleHabit = async (habitId) => {
    const token = await getToken();

    await fetch(
      `${API}/api/habits/${habitId}/toggle`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    refresh();
  };

  return (
    <>
    <div className="habit-big-box">
      <div className="habit-main-box">
        <div className="habit-heading">DAILY/PROTOCOL</div>
        {habits.map((habit) => {
          const formattedTime = new Date(habit.createdAt).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          });

          return (
            <div key={habit._id} className="habit-lists">
              <div 
                className="habit-list-main" 
                onClick={() => toggleHabit(habit._id)}
                style={{ cursor: 'pointer' }}
              >
                <div className={`habit-checkbox ${habit.completedToday ? 'done' : ''}`}></div>
                <div className="habit-list-1">
                  <div className={`habit-title ${habit.completedToday ? 'completed' : ''}`}>
                    {habit.title}
                  </div>
                  <div className="habit-sub-title">
                    {formattedTime} • {(habit.frequency || 'daily').toUpperCase()}
                  </div>
                </div>
              </div>
              <div className="habit-list-2">
                <div className="habit-streak">
                   STREAK: {habit.streak || 0}D
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default HabitCard;
