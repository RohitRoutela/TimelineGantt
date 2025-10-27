import { TimelineTask } from "../types/timeline.types";

export function isTaskValid(task: TimelineTask): boolean {
  return (
    task.startDate < task.endDate &&
    task.progress >= 0 &&
    task.progress <= 100
  );
}
