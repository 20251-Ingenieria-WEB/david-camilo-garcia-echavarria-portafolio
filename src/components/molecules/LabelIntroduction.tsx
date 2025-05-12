import React from 'react';
import Subtitle from '../atoms/texts/Subtitle';
import BodyText from '../atoms/texts/BodyText';

interface LabelIntroductionProps {
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

//Título y descripción de las secciones de la app
const LabelIntroduction: React.FC<LabelIntroductionProps> = ({
  className = '',
  title,
  description,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full gap-4 px-4 py-8 text-center bg-background ${className}`}
    >
      <Subtitle className="text-text-main">{title}</Subtitle>
      <BodyText className="max-w-2xl text-secondary">{description}</BodyText>
    </div>
  );
};

export default LabelIntroduction;
