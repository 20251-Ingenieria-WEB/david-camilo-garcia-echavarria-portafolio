import React from 'react';
import SkillCategory from './SkillCategory';
import Separator from '../../atoms/Separator';
import LabelPair from '../../molecules/LabelPair';
import BodyText from '../../atoms/texts/BodyText';
import CardTitle from '../../atoms/texts/TitleCard';
import OtherSkillsCategory from './OtherSkillsCategory';

interface MainSidebarProps {
  className?: string;
}

//Arrays de la sidebar
const MainSidebar: React.FC<MainSidebarProps> = ({ className = '' }) => {
  const personalInfo = [
    { label: 'Age', value: '25' },
    { label: 'Residence', value: 'Colombia' },
    { label: 'Freelance', value: 'Available', valueColor: 'text-accent' },
    { label: 'Address', value: 'MD, COL' },
  ];

  const programmingSkills = {
    title: 'Programming Skills',
    skills: [
      { name: 'Java', value: 90 },
      { name: 'C#', value: 75 },
      { name: 'Python', value: 95 },
      { name: 'JavaScript', value: 90 },
      { name: 'TypeScript', value: 80 },
      { name: 'SQL', value: 85 },
      { name: 'HTML5', value: 95 },
      { name: 'CSS3', value: 75 },
      { name: 'TailWindCSS', value: 85 },
    ],
  };

  const languages = {
    title: 'Languages',
    skills: [
      { name: 'English', value: 90 },
      { name: 'Spanish', value: 100 },
    ],
  };

  //Sidebar izquierdo de la app
  return (
    <aside
      className={`md:sticky w-full md:max-w-sm bg-surface p-12 rounded-lg top-0 h-screen overflow-y-auto sm:w-full scrollbar-fade ${className}`}
    >
      {/* Sección de perfil */}
      <div className="flex flex-col items-center mb-20">
        <div className="relative flex items-center justify-center mb-4 w-52 h-52">
          <div className="w-full h-full overflow-hidden rounded-full bg-surface">
            <img
              src="/Shattered.webp"
              alt="Profile"
              className="object-cover w-full h-full bg-black"
              style={{ objectPosition: 'center', transform: 'scale(2.5)' }}
            />
          </div>
          {/* Bolita verde de estado */}
          <span
            className="absolute w-8 h-8 border-4 border-white rounded-full bg-accent bottom-4 right-4"
            title="Online"
          />
        </div>

        <CardTitle className="mb-2 text-center">David García</CardTitle>
        <BodyText className="text-center text-secondary">
          FullStack Developer
        </BodyText>
      </div>

      <Separator />

      {/* Información personal */}
      <div className="mb-6 space-y-3">
        {personalInfo.map(({ label, value, valueColor }) => (
          <LabelPair
            key={label}
            leftLabel={label}
            rightLabel={value}
            rightClassname={valueColor}
          />
        ))}
      </div>

      <Separator />

      {/* Habilidades de programación */}
      <div className="mb-6 text-secondary">
        <SkillCategory
          title={programmingSkills.title}
          skills={programmingSkills.skills}
        />
      </div>

      <Separator />

      {/* Idiomas */}
      <div className="mb-6 text-secondary">
        <SkillCategory title={languages.title} skills={languages.skills} />
      </div>
      <Separator />

      {/* Información adicional */}
      <OtherSkillsCategory
        title="Extra Skills"
        skills={[
          'Teamwork',
          'Problem Solving',
          'Adaptability',
          'Time Management',
          'Conflict Resolution',
          'Assertive Communication',
          'Git Version Control',
          'CI/CD',
          'Containers',
          'Agile Methodologies',
          'Testing',
        ]}
      />
      <Separator />
    </aside>
  );
};

export default MainSidebar;
