import mongoose from "mongoose";

const habitLogSchema = new mongoose.Schema(
  {
    habitId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Habit",
      required: [true, "A habit log must be linked to a valid Habit ID"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "A habit log must be linked to a valid User ID"],
    },
    date: {
      type: String,
      required: [true, "Date is required"],
      //  YYYY-MM-DD format (e.g 2026-05-03)
      match: [/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, "Please provide a valid date in YYYY-MM-DD format"],
    },
    completed: {
      type: Boolean,
      required: [true, "Completion status is required"],
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

habitLogSchema.index({ habitId: 1, date: 1 }, { unique: true });

export default mongoose.model("HabitLog", habitLogSchema);