import React from 'react';
import LayersIcon from '../atoms/icons/layers';
import BodyText from '../atoms/texts/BodyText';

interface OtherSkillsProps {
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

//Habilidades adicionales de la sidebar
const OtherSkills: React.FC<OtherSkillsProps> = ({
  children,
  className = '',
  iconClassName = '',
}) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <LayersIcon className={`w-6 h-6 text-primary ${iconClassName}`} />
    <BodyText>{children}</BodyText>
  </div>
);

export default OtherSkills;
