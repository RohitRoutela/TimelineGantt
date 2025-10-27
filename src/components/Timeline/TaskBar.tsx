import React from "react";
import { TimelineTask } from "./TimelineView.types";
import { formatDate } from "../../utils/date.utils";

interface Props {
  task: TimelineTask;
  position: { left: number; width: number };
  onDragStart: () => void;
  onDragEnd: () => void;
  onClick: () => void;
}

const TaskBar: React.FC<Props> = ({ task, position, onClick }) => {
  return (
    <div
      style={{
        left: position.left,
        width: position.width,
        top: 10,
        position: "absolute",
        height: 28,
        backgroundColor: task.color ?? "#0ea5e9",
        zIndex: 10,
      }}
      className="rounded-md shadow cursor-pointer flex items-center px-2 text-white select-none overflow-hidden"
      tabIndex={0}
      aria-label={`${task.title}: ${formatDate(task.startDate, "day")} - ${formatDate(task.endDate, "day")} progress ${task.progress}%`}
      onClick={onClick}
    >
      <span className="font-medium text-xs truncate mr-2">{task.title}</span>
      <span className="text-[11px] opacity-90">{task.progress}%</span>
    </div>
  );
};
export default TaskBar;
