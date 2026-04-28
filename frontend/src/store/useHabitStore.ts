import { create } from 'zustand';
import toast from 'react-hot-toast';
import { getToken } from '../utils/auth';

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

interface HabitStore {
  habits: Habit[];
  stats: Stats;
  isLoading: boolean;
  
  fetchHabits: () => Promise<void>;
  fetchStats: () => Promise<void>;
  addHabit: (title: string) => Promise<void>;
  toggleHabit: (habitId: string) => Promise<void>;
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

const getAuthHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : undefined;
};

export const useHabitStore = create<HabitStore>((set, get) => ({
  habits: [],
  stats: { currentMomentum: 0, personalRecord: 0 },
  isLoading: false,

  fetchHabits: async () => {
    set({ isLoading: true });
    try {
      const headers = getAuthHeaders();
      if (!headers) {
        toast.error('Authentication required');
        return;
      }

      const res = await fetch(`${API}/api/habits`, {
        headers,
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

  fetchStats: async () => {
    try {
      const headers = getAuthHeaders();
      if (!headers) {
        toast.error('Authentication required');
        return;
      }

      const res = await fetch(`${API}/api/habits/stats`, {
        headers,
      });
      await handleApiError(res, "Failed to fetch stats");
      const data = await res.json();
      set({ stats: data });
    } catch (error: any) {
      toast.error(error.message);
    }
  },

  addHabit: async (title) => {
    try {
      const headers = getAuthHeaders();
      if (!headers) {
        toast.error('Authentication required');
        return;
      }

      const res = await fetch(`${API}/api/habits`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify({ title }),
      });
      await handleApiError(res, "Failed to add habit");
      await get().fetchHabits();
      await get().fetchStats();
      toast.success("Habit created!");
    } catch (error: any) {
      toast.error(error.message);
    }
  },

  toggleHabit: async (habitId) => {
    try {
      const headers = getAuthHeaders();
      if (!headers) {
        toast.error('Authentication required');
        return;
      }

      const res = await fetch(`${API}/api/habits/${habitId}/toggle`, {
        method: 'POST',
        headers,
      });
      await handleApiError(res, "Failed to toggle habit");
      await get().fetchHabits();
      await get().fetchStats();
    } catch (error: any) {
      toast.error(error.message);
    }
  }
}));
