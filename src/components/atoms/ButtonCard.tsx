import React from 'react';

interface ButtonCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

//Boton de las tarjetas de la app
const ButtonCard: React.FC<ButtonCardProps> = ({
  children,
  className = '',
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-lg md:text-xl font-semibold text-primary hover:text-text-main transition-colors ${className}`}
  >
    {children}
  </button>
);

export default ButtonCard;
