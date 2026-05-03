import mongoose from "mongoose";
import { z } from "zod";

export const createHabitSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: "Habit title is required" })
      .min(3, "Title must be at least 3 characters")
      .max(50, "Title cannot exceed 50 characters"),
    frequency: z.enum(["daily", "weekly"]).optional(),
    goal: z.number().positive().optional(),
  }),
});

export const habitIdParamsSchema = z.object({
  params: z.object({
    id: z.string().refine(mongoose.isValidObjectId, {
      message: "Invalid habit id",
    }),
  }),
});
