import React from 'react';
import Separator from '@/components/atoms/Separator';
import CardStudies from './CardStudies';
import LabelIntroduction from '@/components/molecules/LabelIntroduction';

interface StudiesSectionProps {
  className?: string;
}

// Array de datos de estudios
const studiesData = [
  {
    institution: 'Universidad de Antioquia, Medellín',
    role: 'Student',
    timePeriod: 'Jan 2023 -',
    title: 'Bachelor’s in Systems Engineering',
    description: `Key Courses: Data Structures; Software Engineering; Advanced Databases; Networking & Information Security`,
  },
  {
    institution: 'Universidad de Antioquia, Medellín',
    role: 'Student',
    timePeriod: 'Jan 2017 - Dec 2022',
    title: 'Bachelor’s in Electrical Engineering',
    description: `Focus on electronic circuits, control systems, and industrial automation
Developed microcontroller applications and modeled electrical systems`,
  },
  {
    institution: 'Centro Educativo Santa Teresita del Niño Jesús, La Estrella',
    role: 'Student',
    timePeriod: '- Dec 2016',
    title: 'High School Diploma, Science Focus',
    description: `General curriculum in mathematics, physics, and introductory computer science`,
  },
];

// Sección de estudios
const StudiesSection: React.FC<StudiesSectionProps> = ({ className = '' }) => (
  <section className={`flex flex-col ${className}`}>
    <div>
      <LabelIntroduction
        title="Education"
        description={`Currently pursuing a Bachelor’s in Systems Engineering at Universidad de Antioquia, where I’ve mastered software engineering principles, advanced databases, and network security. Previously earned a degree in Electrical Engineering, focusing on control systems and industrial automation. Also served as a Bilingual Customer Advisor, honing my English communication skills in technical and client-facing contexts.`}
        className="mb-8"
      />
      {/* Contenedor de las tarjetas de estudios */}
      <div className="p-12 bg-surface">
        {studiesData.map((item, idx) => (
          <React.Fragment key={idx}>
            <CardStudies {...item} />
            {idx < studiesData.length - 1 && <Separator className="mb-8" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default StudiesSection;
