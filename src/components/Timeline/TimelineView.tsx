import React from "react";
import { TimelineViewProps } from "./TimelineView.types";
import TimelineGrid from "./TimelineGrid";
import TimelineRowComponent from "./TimelineRow";
import TaskDetailSidebar from "./TaskDetailSidebar";

/**
 * Renders the main TimelineGantt view including grid header, rows, and sidebar.
 */
const TimelineView: React.FC<TimelineViewProps> = ({
  rows,
  tasks,
  startDate,
  endDate,
  viewMode,
  onTaskUpdate,
  onTaskMove,
}) => {
  return (
    <div className="relative flex w-full h-full bg-neutral-50" role="region" aria-label="Project Timeline Gantt">
      {/* Row labels (sticky left column) */}
      <aside className="z-10 shrink-0 w-48 bg-neutral-100 border-r border-neutral-200 flex flex-col items-stretch">
        <div className="h-12 border-b border-neutral-200" />
        {/* leave top-row empty for alignment with timeline grid header */}
        {rows.map(row => (
              <div key={row.id} className="flex items-center px-4 py-3 border-b border-neutral-100 min-h-[48px]">
                {row.avatar && (
                  <img
                    src={row.avatar}
                    alt={row.label}
                    className="w-8 h-8 rounded-full mr-3 object-cover"
                    loading="lazy"
                  />
                )}
                <span className="font-medium text-sm text-neutral-700 truncate">{row.label}</span>
              </div>
          ))}
      </aside>

      {/* Timeline panel: horizontal scroll for grid and tasks */}
      <main className="relative flex-1 overflow-x-auto overflow-y-hidden">
        {/* Grid header for time scale */}
        <div className="sticky top-0 left-0 z-10 bg-neutral-50">
          <TimelineGrid
            startDate={startDate}
            endDate={endDate}
            viewMode={viewMode}
          />
        </div>

        {/* Timeline task rows */}
        <div className="relative overflow-y-auto">
          {rows.map(row => (
            <TimelineRowComponent
              key={row.id}
              row={row}
              tasks={row.tasks.map(id => tasks[id])}
              startDate={startDate}
              endDate={endDate}
              viewMode={viewMode}
              onTaskUpdate={onTaskUpdate}
              onTaskMove={onTaskMove}
            />
          ))}
        </div>
      </main>
      
      {/* Optional: Detail sidebar */}
      <TaskDetailSidebar />
    </div>
  );
};

export default TimelineView;
