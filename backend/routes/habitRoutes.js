import express from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateResource.js";
import {
  createHabitSchema,
  habitIdParamsSchema,
} from "../validations/habitValidation.js";
import {
  createHabit,
  getHabits,
  toggleHabit,
  getUserStats,
} from "../controllers/habitController.js";

const router = express.Router();

router.post("/", requireAuth, validate(createHabitSchema), createHabit);
router.get("/", requireAuth, getHabits);
router.get("/stats", requireAuth, getUserStats);
router.post(
  "/:id/toggle",
  requireAuth,
  validate(habitIdParamsSchema),
  toggleHabit,
);

export default router;
