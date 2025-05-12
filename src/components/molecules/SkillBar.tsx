import React from 'react';
import BodyText from '../atoms/texts/BodyText';
import ProgressBar from '../atoms/ProgressBar';

interface SkillBarProps {
  leftLabel: string;
  value: number;
  rightLabel?: string;
  className?: string;
}

//Conocimientos de la sidebar con etiquetas y barra de progreso
const SkillBar: React.FC<SkillBarProps> = ({
  leftLabel,
  value,
  rightLabel,
  className = '',
}) => (
  <div className={`w-full ${className}`}>
    <div className="flex justify-between mb-1">
      <BodyText>{leftLabel}</BodyText>
      <BodyText>{rightLabel ?? `${value}%`}</BodyText>
    </div>
    <ProgressBar value={value} />
  </div>
);

export default SkillBar;
