import React from 'react';
import CardTitle from '../../atoms/texts/TitleCard';
import SkillBar from '../../molecules/SkillBar';

interface Skill {
  name: string;
  value: number;
  rightLabel?: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  className?: string;
}

//Conocimientos de la sidebar con barra de progreso
const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  className = '',
}) => (
  <div className={`w-full ${className}`}>
    {/* Título de la sección */}
    <CardTitle className="mb-4 text-left">{title}</CardTitle>
    {/* Contenedor de las habilidades */}
    <div className="space-y-3">
      {skills.map((skill) => (
        <SkillBar
          key={skill.name}
          leftLabel={skill.name}
          value={skill.value}
          rightLabel={skill.rightLabel}
        />
      ))}
    </div>
  </div>
);

export default SkillCategory;
