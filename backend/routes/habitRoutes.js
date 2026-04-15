import express from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
import {
  createHabit,
  getHabits,
  toggleHabit,
  getUserStats,
} from "../controllers/habitController.js";

const router = express.Router();

router.post("/", requireAuth, createHabit);
router.get("/", requireAuth, getHabits);
router.get("/stats", requireAuth, getUserStats);
router.post("/:id/toggle", requireAuth, toggleHabit);

export default router;