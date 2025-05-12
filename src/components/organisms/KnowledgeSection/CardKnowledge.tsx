import React from 'react';
import LabelCard from '../../molecules/LabelCard';

export interface CardProps {
  icon: React.ReactNode;
  iconClassName?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
}

//Tarjeta de la sección de conocimientos
const CardKnowledge: React.FC<CardProps> = ({
  icon,
  iconClassName = '',
  title,
  description,
  className = '',
}) => (
  <div
    className={`container flex flex-col gap-6 items-center justify-center p-8 bg-surface ${className}`}
  >
    <div
      className={`flex items-center justify-center w-56 md:w-full md:max-h-56 ${iconClassName}`}
    >
      {icon}
    </div>
    <LabelCard
      title={title}
      description={description}
      className="items-center text-center "
    />
  </div>
);

export default CardKnowledge;
