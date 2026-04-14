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

    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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

    res.json(log);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "Already logged today" });
    }

    res.status(500).json({ error: err.message });
  }
};