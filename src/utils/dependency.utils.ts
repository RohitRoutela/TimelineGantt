import { TimelineTask } from "../types/timeline.types";

export interface DependencyLine {
  x1: number; y1: number;
  x2: number; y2: number;
  fromTaskId: string;
  toTaskId: string;
}

export function calculateDependencyLine(
  fromTask: TimelineTask, toTask: TimelineTask,
  fromPos: { left: number; width: number; top: number },
  toPos: { left: number; width: number; top: number }
): DependencyLine {
  const x1 = fromPos.left + fromPos.width;
  const y1 = fromPos.top + 16;
  const x2 = toPos.left;
  const y2 = toPos.top + 16;
  return { x1, y1, x2, y2, fromTaskId: fromTask.id, toTaskId: toTask.id };
}
