import React from 'react';

interface ProgressBarProps {
  value: number; // 0 a 100
  className?: string;
}

//Barra de progreso de conocimientos usado en la sidebar
const ProgressBar: React.FC<ProgressBarProps> = ({ value, className = '' }) => (
  <div
    className={`w-full h-2 border border-primary rounded-full bg-surface ${className}`}
    style={{ padding: '1.5px' }}
  >
    <div
      className="h-full transition-all duration-300 rounded-full bg-primary"
      style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
    />
  </div>
);

export default ProgressBar;
