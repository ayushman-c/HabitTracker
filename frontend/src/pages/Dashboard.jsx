import React from 'react'
import './Dashboard.css'
import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import Dnavbar from '../components/DashboardC/Dnavbar'
import MainSec from '../components/DashboardC/MainSec'
import AddHabit from '../components/DashboardC/AddHabit'
import HabitCard from '../components/DashboardC/HabitCard'
import Footer from '../components/Footer';
import StreakCount from '../components/DashboardC/StreakCount';

const API = import.meta.env.VITE_API_URL

const Dashboard = () => {
  const { getToken } = useAuth();
  const { user } = useUser();

  const [habits, setHabits] = useState([]);
  const [stats, setStats] = useState({ currentMomentum: 0, personalRecord: 0 });


  const fetchHabits = async () => {
    const token = await getToken();

    const res = await fetch(`${API}/api/habits`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setHabits(data);
  };

  const fetchStats = async () => {
    const token = await getToken();

    const res = await fetch(`${API}/api/habits/stats`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setStats(data);
  };

  useEffect(() => {
    fetchHabits();
    fetchStats();
  }, []);

  return (
    <>
    <Dnavbar/>
    <MainSec habits={habits} />

    <div className="dash-nav-main">

      <div className="dash-nav-streak">
    <div className="dash-nav-sub">
      <div className="dash-nav-head">FORGE/NEW</div>
      <div className="div-form-1">
        <div className="form-1-heading">HABIT IDENTITY</div>
        <AddHabit refresh={() => { fetchHabits(); fetchStats(); }} />
      </div>

      
    </div>
      <StreakCount stats={stats} />
      </div>

    <div className="second-box">
      
      <div className="habit">
        <HabitCard
          habits={habits}
          refresh={() => { fetchHabits(); fetchStats(); }}
        />
      </div>

    </div>
    
    </div>




    
    <Footer/>
    </>
  );
};

export default Dashboard;
