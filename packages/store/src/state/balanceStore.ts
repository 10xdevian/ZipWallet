import { create } from "zustand";

type BalanceState = {
  balance: number;
  setBalance: (value: number) => void;
};

export const useBalanceStore = create<BalanceState>((set) => ({
  balance: 10,
  setBalance: (value) => set({ balance: value }),
}));
