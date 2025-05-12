'use client';
import React from 'react';
import LabelCard from '@/components/molecules/LabelCard';
import CardLink from '@/components/atoms/ButtonCard';

interface CardPortfolioProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt?: string;
  imgClassName?: string;
  className?: string;
  onLearnMore?: () => void;
}

//Tarjeta de portafolio de la app
const CardPortfolio: React.FC<CardPortfolioProps> = ({
  title,
  description,
  imgSrc,
  imgAlt = 'Portfolio Image',
  imgClassName = '',
  className = '',
  onLearnMore,
}) => {
  return (
    <div
      className={`flex flex-col bg-surface max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ${className}`}
    >
      {/* Imagen de la tarjeta */}
      <img
        src={imgSrc}
        alt={imgAlt}
        className={`flex h-auto mt-10 max-h-52 object-cover w-full ${imgClassName}`}
      />
      {/* Contenedor de la tarjeta */}
      <div className="p-8">
        {/* Título y descripción de la tarjeta */}
        <LabelCard
          title={title}
          description={description}
          className="items-start mb-4 text-left"
          descriptionClassName="text-secondary line-clamp-3"
        />
        {/* Botón de la tarjeta */}
        <CardLink
          onClick={onLearnMore}
          className="text-lg font-semibold transition-colors md:text-xl text-primary hover:text-text-main"
          children="Learn More →"
        />
      </div>
    </div>
  );
};

export default CardPortfolio;
