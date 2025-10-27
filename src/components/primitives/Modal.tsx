import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => (
  isOpen ? (
    <div className="fixed z-40 inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-40" role="dialog" aria-modal="true">
      <div className="bg-white rounded-xl shadow-modal p-4 max-w-lg w-full">
        <button onClick={onClose} className="absolute top-4 right-4">×</button>
        {children}
      </div>
    </div>
  ) : null
);
export default Modal;
