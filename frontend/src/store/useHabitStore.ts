import { create } from 'zustand';
import toast from 'react-hot-toast';

const API = import.meta.env.VITE_API_URL;

interface Habit {
  _id: string;
  title: string;
  createdAt: string | Date;
  completedToday: boolean;
  streak: number;
  frequency?: string;
}

interface Stats {
  currentMomentum: number;
  personalRecord: number;
}

type GetToken = () => Promise<string | null>;

interface HabitStore {
  habits: Habit[];
  stats: Stats;
  isLoading: boolean;
  
  fetchHabits: (getToken: GetToken) => Promise<void>;
  fetchStats: (getToken: GetToken) => Promise<void>;
  addHabit: (title: string, getToken: GetToken) => Promise<void>;
  toggleHabit: (habitId: string, getToken: GetToken) => Promise<void>;
}

const handleApiError = async (res: Response, defaultMsg: string) => {
  if (!res.ok) {
    try {
      const data = await res.json();
      throw new Error(data.error || defaultMsg);
    } catch (e: any) {
      throw new Error(e.message || defaultMsg);
    }
  }
};

export const useHabitStore = create<HabitStore>((set, get) => ({
  habits: [],
  stats: { currentMomentum: 0, personalRecord: 0 },
  isLoading: false,

  fetchHabits: async (getToken) => {
    set({ isLoading: true });
    try {
      const token = await getToken();
      if (!token) return;
      const res = await fetch(`${API}/api/habits`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await handleApiError(res, "Failed to fetch habits");
      const data = await res.json();
      set({ habits: data });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      set({ isLoading: false });
    }
  },

  fetchStats: async (getToken) => {
    try {
      const token = await getToken();
      if (!token) return;
      const res = await fetch(`${API}/api/habits/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      await handleApiError(res, "Failed to fetch stats");
      const data = await res.json();
      set({ stats: data });
    } catch (error: any) {
      toast.error(error.message);
    }
  },

  addHabit: async (title, getToken) => {
    try {
      const token = await getToken();
      if (!token) return;
      const res = await fetch(`${API}/api/habits`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title }),
      });
      await handleApiError(res, "Failed to add habit");
      await get().fetchHabits(getToken);
      await get().fetchStats(getToken);
      toast.success("Habit created!");
    } catch (error: any) {
      toast.error(error.message);
    }
  },

  toggleHabit: async (habitId, getToken) => {
    try {
      const token = await getToken();
      if (!token) return;
      const res = await fetch(`${API}/api/habits/${habitId}/toggle`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
      await handleApiError(res, "Failed to toggle habit");
      await get().fetchHabits(getToken);
      await get().fetchStats(getToken);
    } catch (error: any) {
      toast.error(error.message);
    }
  }
}));
