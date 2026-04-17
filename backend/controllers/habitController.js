import Habit from "../models/Habit.js";
import HabitLog from "../models/HabitLog.js";

export const createHabit = async (req, res) => {
  try {
    const userId = req.auth.userId;

    const { title, frequency, goal } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const habit = await Habit.create({
      userId,
      title,
      frequency,
      goal,
    });

    res.status(201).json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getHabits = async (req, res) => {
  try {
    const userId = req.auth.userId;

    const habits = await Habit.find({ userId }).sort({ createdAt: -1 });
    const today = new Date().toISOString().split("T")[0];

    const habitsWithStatus = await Promise.all(habits.map(async (habit) => {
      const log = await HabitLog.findOne({
        habitId: habit._id,
        date: today,
        completed: true
      });
      return {
        ...habit.toObject(),
        completedToday: !!log
      };
    }));

    res.json(habitsWithStatus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const calculateStreak = async (habitId) => {
  let streak = 0;
  let checkDate = new Date();
  
  let todayStr = checkDate.toISOString().split("T")[0];
  let log = await HabitLog.findOne({ habitId, date: todayStr, completed: true });
  
  if (log) {
    while (log) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
      let dateStr = checkDate.toISOString().split("T")[0];
      log = await HabitLog.findOne({ habitId, date: dateStr, completed: true });
    }
  } else {
    checkDate.setDate(checkDate.getDate() - 1);
    let dateStr = checkDate.toISOString().split("T")[0];
    log = await HabitLog.findOne({ habitId, date: dateStr, completed: true });
    while (log) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
      let dateStr = checkDate.toISOString().split("T")[0];
      log = await HabitLog.findOne({ habitId, date: dateStr, completed: true });
    }
  }
  return streak;
};

export const toggleHabit = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const { id } = req.params;

    const today = new Date().toISOString().split("T")[0];

    let log = await HabitLog.findOne({
      habitId: id,
      date: today,
    });

    if (log) {
      log.completed = !log.completed;
      await log.save();
    } else {
      log = await HabitLog.create({
        habitId: id,
        userId,
        date: today,
        completed: true,
      });
    }

    const newStreak = await calculateStreak(id);
    await Habit.findByIdAndUpdate(id, { streak: newStreak });

    res.json({ ...log.toObject(), streak: newStreak });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "Already logged today" });
    }

    res.status(500).json({ error: err.message });
  }
};

export const getUserStats = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const logs = await HabitLog.find({ userId, completed: true }).sort({ date: -1 });

    if (logs.length === 0) {
      return res.json({ currentMomentum: 0, personalRecord: 0 });
    }

    const uniqueDates = [...new Set(logs.map(log => log.date))];
    
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    let currentMomentum = 0;
    let personalRecord = 0;
    let tempStreak = 0;

    for (let i = 0; i < uniqueDates.length; i++) {
      tempStreak++;
      if (i < uniqueDates.length - 1) {
        const currentDate = new Date(uniqueDates[i]);
        const nextDate = new Date(uniqueDates[i + 1]);
        const diffInDays = Math.round((currentDate - nextDate) / (1000 * 60 * 60 * 24));
        
        if (diffInDays === 1) {
        } else {
          if (tempStreak > personalRecord) personalRecord = tempStreak;
          tempStreak = 0;
        }
      } else {
        if (tempStreak > personalRecord) personalRecord = tempStreak;
      }
    }

    if (uniqueDates[0] === today || uniqueDates[0] === yesterdayStr) {
      let checkDate = new Date(uniqueDates[0]);
      let dateIdx = 0;
      while (dateIdx < uniqueDates.length) {
        const dateStr = checkDate.toISOString().split("T")[0];
        if (uniqueDates[dateIdx] === dateStr) {
          currentMomentum++;
          checkDate.setDate(checkDate.getDate() - 1);
          dateIdx++;
        } else {
          break;
        }
      }
    }

    res.json({ currentMomentum, personalRecord });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};