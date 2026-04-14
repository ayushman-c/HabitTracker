import mongoose from "mongoose";

const habitLogSchema = new mongoose.Schema({
  habitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Habit",
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: String, 
    required: true,
  },
  completed: {
    type: Boolean,
    default: true,
  },
});

habitLogSchema.index({ habitId: 1, date: 1 }, { unique: true });

export default mongoose.model("HabitLog", habitLogSchema);