import { useState, useCallback, useMemo } from "react";
import { ViewMode } from "../types/timeline.types";

export interface TimelineState {
  viewMode: ViewMode;
  startDate: Date;
  endDate: Date;
  pixelsPerDay: number;
}

export const useTimeline = (initialDate: Date) => {
  const [state, setState] = useState<TimelineState>({
    viewMode: "week",
    startDate: new Date(initialDate.getFullYear(), initialDate.getMonth(), 1),
    endDate: new Date(initialDate.getFullYear(), initialDate.getMonth() + 3, 0),
    pixelsPerDay: 40,
  });

  const zoomIn = useCallback(() => {
    setState((prev) => {
      if (prev.viewMode === "month") {
        return { ...prev, viewMode: "week", pixelsPerDay: 80 };
      }
      if (prev.viewMode === "week") {
        return { ...prev, viewMode: "day", pixelsPerDay: 40 };
      }
      return prev;
    });
  }, []);

  const zoomOut = useCallback(() => {
    setState((prev) => {
      if (prev.viewMode === "day") {
        return { ...prev, viewMode: "week", pixelsPerDay: 80 };
      }
      if (prev.viewMode === "week") {
        return { ...prev, viewMode: "month", pixelsPerDay: 120 };
      }
      return prev;
    });
  }, []);

  const scrollToToday = useCallback(() => {
    const today = new Date();
    setState((prev) => ({
      ...prev,
      startDate: new Date(today.getFullYear(), today.getMonth() - 1, 1),
      endDate: new Date(today.getFullYear(), today.getMonth() + 2, 0),
    }));
  }, []);

  return { ...state, zoomIn, zoomOut, scrollToToday };
};
