import React from 'react';

interface SeparatorProps {
  className?: string;
}

//Separador de la app
const Separator: React.FC<SeparatorProps> = ({ className = '' }) => (
  <div
    className={`w-full rounded-full bg-background my-4 ${className}`}
    style={{ height: '1.5px' }}
    role="separator"
  />
);

export default Separator;
