import { create } from 'zustand';

interface ResumeState {
  hasLoaded: boolean;
  setLoaded: () => void;
}

const useResumeStore = create<ResumeState>((set) => ({
  hasLoaded: false,
  setLoaded: () => set({ hasLoaded: true }),
}));

export default useResumeStore;
