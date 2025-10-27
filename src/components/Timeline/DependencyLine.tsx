import React from "react";
import { DependencyLine } from "../../utils/dependency.utils";

interface Props {
  line: DependencyLine;
}
const DependencyLineComponent: React.FC<Props> = ({ line }) => (
  <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" />
      </marker>
    </defs>
    <path
      d={`M${line.x1},${line.y1} L${line.x2},${line.y2}`}
      stroke="#94a3b8"
      strokeWidth={2}
      fill="none"
      markerEnd="url(#arrowhead)"
    />
  </svg>
);
export default DependencyLineComponent;
