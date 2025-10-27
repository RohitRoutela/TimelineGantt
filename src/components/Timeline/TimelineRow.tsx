import React from "react";
import { TimelineRow, TimelineTask, ViewMode } from "./TimelineView.types";
import TaskBar from "./TaskBar";

interface Props {
  row: TimelineRow;
  tasks: TimelineTask[];
  startDate: Date;
  endDate: Date;
  viewMode: ViewMode;
  onTaskUpdate: (taskId: string, updates: Partial<TimelineTask>) => void;
  onTaskMove: (taskId: string, newRowId: string, newStartDate: Date) => void;
}

import { calculatePosition, calculateDuration } from "../../utils/position.utils";

const CELL_WIDTH = 96; // must match TimelineGrid

const TimelineRowComponent: React.FC<Props> = ({ tasks, startDate, endDate }) => {
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const containerWidth = totalDays * CELL_WIDTH;

  return (
    <div className="relative border-b border-neutral-100" style={{ height: 48 }}>
      <div style={{ width: containerWidth, minWidth: containerWidth }} className="relative h-full">
        {tasks.map((task) => {
          const left = calculatePosition(task.startDate, startDate, CELL_WIDTH);
          const width = Math.max(24, calculateDuration(task.startDate, task.endDate, CELL_WIDTH));
          return (
            <TaskBar
              key={task.id}
              task={task}
              position={{ left, width }}
              onDragStart={() => {}}
              onDragEnd={() => {}}
              onClick={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TimelineRowComponent;
