import React from 'react';
import CardTitle from '../../atoms/texts/TitleCard';
import OtherSkills from '../../molecules/OtherSkills';

interface OtherSkillsCategoryProps {
  title: string;
  skills: string[];
  className?: string;
}

//Habilidades adicionales de la sidebar
const OtherSkillsCategory: React.FC<OtherSkillsCategoryProps> = ({
  title,
  skills,
  className = '',
}) => (
  <div className={`bg-white rounded-lg ${className}`}>
    {/* Título de la sección */}
    <CardTitle className="mb-4">{title}</CardTitle>
    {/* Contenedor de las habilidades */}
    <div className="flex flex-col gap-2 text-secondary">
      {skills.map((skill, idx) => (
        <OtherSkills key={idx}>{skill}</OtherSkills>
      ))}
    </div>
  </div>
);

export default OtherSkillsCategory;
