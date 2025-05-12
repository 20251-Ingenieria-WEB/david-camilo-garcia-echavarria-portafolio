import React from 'react';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

//Dialogo de la app
const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  children,
  className = '',
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className={`bg-surface rounded-lg shadow-lg p-8 relative ${className}`}
      >
        <button
          onClick={onClose}
          className="absolute text-xl top-2 right-2 text-secondary hover:text-primary"
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
