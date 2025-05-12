import React from 'react';
import LabelPair from '@/components/molecules/LabelPair';
import LabelCard from '@/components/molecules/LabelCard';
import CardTitle from '@/components/atoms/texts/TitleCard';

interface CardStudiesProps {
  institution: string;
  role: string;
  timePeriod: string;
  title: string;
  description: string;
  className?: string;
}

//Tarjeta de estudios de la app
const CardStudies: React.FC<CardStudiesProps> = ({
  institution,
  role,
  timePeriod,
  title,
  description,
  className = '',
}) => (
  <div
    className={`flex flex-col md:flex-row items-top text-left bg-surface ${className}`}
  >
    {/* Contenedor izquierdo de la tarjeta */}
    <div className="p-4 md:w-2/5 2xl:mr-32">
      <CardTitle className="mb-4 text-text-main">{institution}</CardTitle>
      <LabelPair
        className="2xl:pr-20"
        leftLabel={role}
        rightLabel={timePeriod}
        rightClassname="bg-primary px-1 text-surface font-light text-xs"
      />
    </div>
    {/* Contenedor derecho de la tarjeta */}
    <div className="p-4 md:w-3/5">
      <LabelCard
        title={title}
        description={description}
        className="items-start text-left"
      />
    </div>
  </div>
);

export default CardStudies;
