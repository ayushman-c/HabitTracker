import React, { useState, useEffect } from 'react';
import './StatCards.css';
import { useAuth } from '@clerk/clerk-react';

const API = import.meta.env.VITE_API_URL;

const CheckCircleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const FlameIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

const TrendingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
    <circle cx="9" cy="21" r="1" strokeWidth="0" style={{ fill: 'currentColor', stroke: 'none' }} />
  </svg>
);

const StatCard = ({ variant, label, value, suffix, icon }) => {
  const iconMap = {
    check: <CheckCircleIcon />,
    flame: <FlameIcon />,
    trending: <TrendingIcon />,
  };

  return (
    <div className={`stat-card stat-card--${variant}`}>
      <div className="stat-card__header">
        <span className="stat-card__label">{label}</span>
        <span className="stat-card__icon">{iconMap[icon]}</span>
      </div>
      <div className="stat-card__value">
        {value}
        {suffix && <span className="stat-card__value-suffix">{suffix}</span>}
      </div>
    </div>
  );
};

const StatCards = () => {
  const { getToken } = useAuth();
  const [habits, setHabits] = useState([]);
  const [stats, setStats] = useState({ currentMomentum: 0, personalRecord: 0 });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const token = await getToken();
      
      // Fetch Habits
      const habitsRes = await fetch(`${API}/api/habits`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const habitsData = await habitsRes.json();
      setHabits(habitsData);

      // Fetch Stats
      const statsRes = await fetch(`${API}/api/habits/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const statsData = await statsRes.json();
      setStats(statsData);
      
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalHabits = habits.length;
  const longestStreak = stats.personalRecord || 0;
  const completedToday = habits.filter(h => h.completedToday).length;
  const completionRate = totalHabits > 0 
    ? Math.round((completedToday / totalHabits) * 100) 
    : 0;

  const cards = [
    {
      variant: 'blue',
      label: 'Total Habits',
      value: totalHabits.toString(),
      suffix: null,
      icon: 'check',
    },
    {
      variant: 'yellow',
      label: 'Longest Streak',
      value: longestStreak.toString(),
      suffix: 'D',
      icon: 'flame',
    },
    {
      variant: 'green',
      label: 'Completion Today',
      value: `${completionRate}%`,
      suffix: null,
      icon: 'trending',
    },
  ];

  if (loading) {
    return (
      <div className="main-wrap">
        <div className="stat-cards-wrapper">
          <div className="stat-card" style={{ justifyContent: 'center', alignItems: 'center' }}>Loading...</div>
          <div className="stat-card" style={{ justifyContent: 'center', alignItems: 'center' }}>Loading...</div>
          <div className="stat-card" style={{ justifyContent: 'center', alignItems: 'center' }}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-wrap">
      <div className="stat-cards-wrapper">
        {cards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>
    </div>
  );
};

export default StatCards;
