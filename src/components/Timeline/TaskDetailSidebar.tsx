import React from "react";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  task?: any;
}

const TaskDetailSidebar: React.FC<Props> = ({ isOpen, onClose, task }) => (
  <aside
    role="complementary"
    aria-label="Task details"
    aria-hidden={!isOpen}
    className={`fixed right-0 top-0 w-80 h-full bg-white shadow-modal z-50 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
  >
    {/* Task detail UI: editable fields, date pickers, progress slider, assignee selector, notes... */}
    <button onClick={onClose} className="absolute top-2 right-2">Close</button>
  </aside>
);
export default TaskDetailSidebar;
