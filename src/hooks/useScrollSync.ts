import { useRef } from "react";
export const useScrollSync = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // Sync scrolling between panels
  return { scrollRef };
};
