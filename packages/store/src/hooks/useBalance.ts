import { useBalanceStore } from "../state/balanceStore";
export const useBalance = () => {
  return useBalanceStore((state) => state.balance);
};
