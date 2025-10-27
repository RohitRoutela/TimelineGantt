import React from "react";
import TimelineView from "./TimelineView";
// Keep stories as plain JS to avoid requiring additional TS loaders in Storybook

const sampleRows = [
  { id: "row-1", label: "Frontend Team", avatar: "avatars/frontend.png", tasks: ["task-1", "task-2"] },
  { id: "row-2", label: "Backend Team", avatar: "avatars/backend.png", tasks: ["task-3"] },
  { id: "row-3", label: "Design Team", avatar: "avatars/design.png", tasks: ["task-4"] },
];

const sampleTasks = {
  "task-1": {
    id: "task-1",
    title: "UI Component Development",
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 0, 15),
    progress: 60,
    assignee: "Frontend Team",
    rowId: "row-1",
    dependencies: [],
    color: "#3b82f6",
    isMilestone: false,
  },
  "task-2": {
    id: "task-2",
    title: "Integration Testing",
    startDate: new Date(2024, 0, 16),
    endDate: new Date(2024, 0, 25),
    progress: 0,
    assignee: "Frontend Team",
    rowId: "row-1",
    dependencies: ["task-1", "task-3"],
    color: "#3b82f6",
    isMilestone: false,
  },
  "task-3": {
    id: "task-3",
    title: "API Development",
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 0, 14),
    progress: 80,
    assignee: "Backend Team",
    rowId: "row-2",
    dependencies: [],
    color: "#10b981",
    isMilestone: false,
  },
  "task-4": {
    id: "task-4",
    title: "Design System Update",
    startDate: new Date(2024, 0, 5),
    endDate: new Date(2024, 0, 12),
    progress: 100,
    assignee: "Design Team",
    rowId: "row-3",
    dependencies: [],
    color: "#f59e0b",
    isMilestone: false,
  },
};

export default {
  title: "TimelineGantt/TimelineView",
  component: TimelineView,
};

export const Default = function Default() {
  return React.createElement(TimelineView, { rows: sampleRows, tasks: sampleTasks, startDate: new Date(2024, 0, 1), endDate: new Date(2024, 0, 31), viewMode: "week", onTaskUpdate: (taskId, updates) => console.log('Task update:', taskId, updates), onTaskMove: (taskId, newRowId, newStartDate) => console.log('Task move:', taskId, newRowId, newStartDate) });
}

export const Empty = function Empty() {
  return React.createElement(TimelineView, { rows: [], tasks: {}, startDate: new Date(2024, 0, 1), endDate: new Date(2024, 0, 31), viewMode: "week", onTaskUpdate: () => {}, onTaskMove: () => {} });
}

export const WithDependencies = function WithDependencies() {
  return React.createElement(TimelineView, { rows: sampleRows, tasks: sampleTasks, startDate: new Date(2024, 0, 1), endDate: new Date(2024, 0, 31), viewMode: "week", showDependencies: true, onTaskUpdate: (taskId, updates) => console.log('Task update:', taskId, updates), onTaskMove: (taskId, newRowId, newStartDate) => console.log('Task move:', taskId, newRowId, newStartDate) });
}

export const MonthView = function MonthView() {
  return React.createElement(TimelineView, { rows: sampleRows, tasks: sampleTasks, startDate: new Date(2024, 0, 1), endDate: new Date(2024, 0, 31), viewMode: "month", onTaskUpdate: (taskId, updates) => console.log('Task update:', taskId, updates), onTaskMove: (taskId, newRowId, newStartDate) => console.log('Task move:', taskId, newRowId, newStartDate) });
}
