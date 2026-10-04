import { create } from "zustand";

export const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((State) => ({ count: State.count +1}))
}));