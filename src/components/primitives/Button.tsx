import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button: React.FC<Props> = ({ children, ...rest }) => (
  <button
    className="bg-primary-500 text-white px-4 py-2 rounded focus:outline focus:outline-2 focus:outline-primary-600"
    {...rest}
  >
    {children}
  </button>
);
export default Button;
