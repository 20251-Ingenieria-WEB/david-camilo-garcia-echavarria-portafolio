import React from 'react';

interface TitleCardProps {
  children: React.ReactNode;
  className?: string;
}

//Titulo de las tarjetas de la app
const TitleCard: React.FC<TitleCardProps> = ({ children, className = '' }) => (
  <h3 className={`text-lg md:text-xl font-semibold ${className}`}>
    {children}
  </h3>
);

export default TitleCard;
