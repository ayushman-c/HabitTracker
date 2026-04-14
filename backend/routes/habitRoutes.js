import express from "express";
import { requireAuth } from "../middleware/authMiddleware.js";
import {
  createHabit,
  getHabits,
  toggleHabit,
} from "../controllers/habitController.js";



const router = express.Router();

router.post("/", requireAuth, createHabit);
router.get("/", requireAuth, getHabits);
router.post("/:id/toggle", requireAuth, toggleHabit);

export default router;