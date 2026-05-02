import Habit from "../models/Habit.js";
import HabitLog from "../models/HabitLog.js";

export const createHabit = async (req, res) => {
  const userId = req.auth.userId;
  const { title, frequency, goal } = req.body;

  const habit = await Habit.create({
    userId,
    title,
    frequency,
    goal,
  });

  res.status(201).json(habit);
};

export const getHabits = async (req, res) => {
  const userId = req.auth.userId;

  const habits = await Habit.find({ userId }).sort({ createdAt: -1 });
  const today = new Date().toISOString().split("T")[0];

  const habitsWithStatus = await Promise.all(
    habits.map(async (habit) => {
      const log = await HabitLog.findOne({
        habitId: habit._id,
        date: today,
        completed: true,
      });
      return {
        ...habit.toObject(),
        completedToday: !!log,
      };
    }),
  );

  res.json(habitsWithStatus);
};

const calculateStreak = async (habitId) => {
  let streak = 0;
  let checkDate = new Date();

  let todayStr = checkDate.toISOString().split("T")[0];
  let log = await HabitLog.findOne({
    habitId,
    date: todayStr,
    completed: true,
  });

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
  const userId = req.auth.userId;
  const { id } = req.params;
  const habit = await Habit.findOne({ _id: id, userId });

  if (!habit) {
    res.status(404);
    throw new Error("Habit not found");
  }

  const today = new Date().toISOString().split("T")[0];

  let log = await HabitLog.findOne({
    habitId: habit._id,
    userId,
    date: today,
  });

  if (log) {
    log.completed = !log.completed;
    await log.save();
  } else {
    try {
      log = await HabitLog.create({
        habitId: habit._id,
        userId,
        date: today,
        completed: true,
      });
    } catch (err) {
      if (err.code === 11000) {
        res.status(400);
        throw new Error("Already logged today");
      }
      throw err;
    }
  }

  const newStreak = await calculateStreak(habit._id);
  habit.streak = newStreak;
  await habit.save();

  res.json({ ...log.toObject(), streak: newStreak });
};

export const getUserStats = async (req, res) => {
  const userId = req.auth.userId;
  const logs = await HabitLog.find({ userId, completed: true }).sort({
    date: -1,
  });

  if (logs.length === 0) {
    return res.json({ currentMomentum: 0, personalRecord: 0 });
  }

  const uniqueDates = [...new Set(logs.map((log) => log.date))];

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
      const diffInDays = Math.round(
        (currentDate - nextDate) / (1000 * 60 * 60 * 24),
      );

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
};
