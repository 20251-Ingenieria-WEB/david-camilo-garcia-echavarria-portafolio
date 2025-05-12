import React from 'react';
import BodyText from '../atoms/texts/BodyText';

interface LabelPairProps {
  leftLabel: React.ReactNode;
  rightLabel: React.ReactNode;
  leftClassname?: string;
  rightClassname?: string;
  className?: string;
}

//Etiquetas de pares de la app clave-valor
const LabelPair: React.FC<LabelPairProps> = ({
  leftLabel,
  rightLabel,
  leftClassname = 'text-text-main',
  rightClassname = 'text-text-main',
  className = '',
}) => (
  <div
    className={`flex justify-between items-center w-full font-bold ${className}`}
  >
    <BodyText className={leftClassname}>{leftLabel}</BodyText>
    <BodyText className={rightClassname}>{rightLabel}</BodyText>
  </div>
);

export default LabelPair;
