import React from "react";
import { ViewMode } from "./TimelineView.types";
import { formatDate } from "../../utils/date.utils";

interface Props {
  startDate: Date;
  endDate: Date;
  viewMode: ViewMode;
}

const getDatesInRange = (start: Date, end: Date): Date[] => {
  const arr = [];
  let curr = new Date(start);
  while (curr <= end) {
    arr.push(new Date(curr));
    curr.setDate(curr.getDate() + 1);
  }
  return arr;
};

const CELL_WIDTH = 96; // px per day column — keep in sync with TimelineRow

const TimelineGrid: React.FC<Props> = ({ startDate, endDate, viewMode }) => {
  const dates = getDatesInRange(startDate, endDate);
  return (
    <div className="flex border-b border-neutral-200 h-12" style={{ minWidth: dates.length * CELL_WIDTH }}>
      {dates.map((date, i) => (
        <div
          key={i}
          style={{ width: CELL_WIDTH }}
          className="flex-none flex items-center justify-center border-r border-neutral-100 bg-neutral-50 text-xs font-medium text-neutral-600"
        >
          {formatDate(date, viewMode)}
        </div>
      ))}
    </div>
  );
};

export default TimelineGrid;
