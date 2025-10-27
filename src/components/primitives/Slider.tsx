import React from "react";

interface Props {
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
}
const Slider: React.FC<Props> = ({ min, max, value, onChange }) => (
  <input
    type="range"
    min={min}
    max={max}
    value={value}
    onChange={e => onChange(Number(e.target.value))}
    className="w-full accent-primary-500"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    aria-label="Progress slider"
  />
);
export default Slider;
