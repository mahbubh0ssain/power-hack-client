import { useState } from "react";

export const useTotal = (amount) => {
  const [total, setTotal] = useState(0);
  setTotal((prev) => prev + amount);
  return total;
};
