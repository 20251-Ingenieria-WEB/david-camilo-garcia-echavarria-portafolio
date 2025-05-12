import React from 'react';

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
}

//Texto de cuerpo de la app
const BodyText: React.FC<BodyTextProps> = ({ children, className = '' }) => (
  <p
    className={`text-base md:text-lg font-normal whitespace-pre-line ${className}`}
  >
    {children}
  </p>
);

export default BodyText;
