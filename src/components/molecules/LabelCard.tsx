import React from 'react';
import CardTitle from '../atoms/texts/TitleCard';
import BodyText from '../atoms/texts/BodyText';

interface LabelCardProps {
  className?: string;
  description: React.ReactNode;
  title: React.ReactNode;
  descriptionClassName?: string;
}

//Título y descripción de las tarjetas de la app
const LabelCard: React.FC<LabelCardProps> = ({
  className = '',
  description,
  title,
  descriptionClassName = 'text-secondary',
}) => {
  return (
    <div className={`flex flex-col w-full gap-4 bg-surface ${className}`}>
      <CardTitle className="text-text-main">{title}</CardTitle>
      <BodyText className={descriptionClassName}>{description}</BodyText>
    </div>
  );
};

export default LabelCard;
