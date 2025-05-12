import React from 'react';
import CardTitle from '../atoms/texts/TitleCard';

interface ButtonMainProps {
  className?: string;
  title: string;
  onClick?: () => void;
}

//Boton principal de la app
const ButtonMain: React.FC<ButtonMainProps> = ({
  className = '',
  title,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`items-center justify-center h-14 px-4 text-sm font-semibold text-text-main bg-primary rounded-lg hover:bg-text-main hover:text-primary transition-colors ${className}`}
    >
      <CardTitle>{title}</CardTitle>
    </button>
  );
};

export default ButtonMain;
