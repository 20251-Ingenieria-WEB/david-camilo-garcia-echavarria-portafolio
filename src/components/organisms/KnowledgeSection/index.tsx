import React from 'react';
import Card from './CardKnowledge';
import LabelIntroduction from '@/components/molecules/LabelIntroduction';
import ArtIcon from '../../atoms/icons/art_museum.svg';
import CodeReviewIcon from '../../atoms/icons/code_review.svg';
import DataAnalysisIcon from '../../atoms/icons/data_analysis.svg';
import UIDesignIcon from '../../atoms/icons/designer.svg';
import WebDesignIcon from '../../atoms/icons/building_a_website.svg';
import KnowledgeIcon from '../../atoms/icons/knowledge.svg';
import SculptIcon from '../../atoms/icons/sculpting.svg';
import VersionControlIcon from '../../atoms/icons/version_control.svg';
import GamingIcon from '../../atoms/icons/video_game.svg';
import TogetherIcon from '../../atoms/icons/working_together.svg';
import PlanIcon from '../../atoms/icons/plan.svg';
import ManagementIcon from '../../atoms/icons/management.svg';

// Array de conocimientos
const knowledgeData = [
  {
    icon: <VersionControlIcon />,
    title: 'Version Control',
    description: 'Managing code changes seamlessly with Git workflows.',
  },
  {
    icon: <KnowledgeIcon />,
    title: 'Building',
    description:
      'Structuring software for scalability and clarity using proven patterns.',
  },
  {
    icon: <CodeReviewIcon />,
    title: 'Code Review',
    description:
      'Ensuring clean, efficient, and maintainable code through constructive feedback.',
  },
  {
    icon: <UIDesignIcon />,
    title: 'Design',
    description:
      'Creating intuitive interfaces that prioritize user experience.',
  },
  {
    icon: <WebDesignIcon />,
    title: 'Web Design',
    description:
      'Building responsive, accessible websites that engage and inform.',
  },
  {
    icon: <DataAnalysisIcon />,
    title: 'Data Analysis',
    description:
      'Turning raw data into actionable insights with statistical rigor.',
  },
  {
    icon: <TogetherIcon />,
    title: 'Collaboration',
    description: 'Managing code changes seamlessly with Git workflows.',
  },
  {
    icon: <PlanIcon />,
    title: 'Planning',
    description: 'Managing code changes seamlessly with Git workflows.',
  },
  {
    icon: <ManagementIcon />,
    title: 'Management',
    description: 'Managing code changes seamlessly with Git workflows.',
  },
  {
    icon: <GamingIcon />,
    title: 'Gaming',
    description:
      'Exploring interactive worlds and mechanics to understand player engagement.',
  },
  {
    icon: <ArtIcon />,
    title: 'Art',
    description:
      'Crafting visual stories through color, form, and composition.',
  },
  {
    icon: <SculptIcon />,
    title: 'Sculpt',
    description: 'Shaping raw materials into expressive three-dimensional art.',
  },
];

// Sección de conocimientos
const KnowledgeSection: React.FC = () => (
  <section className="py-12 bg-background">
    <div className="container mx-auto">
      <LabelIntroduction
        className="mb-8"
        title="My Knowledge"
        description={`A diverse skillset that spans both professional expertise and creative pursuits. From UI/UX design and full-stack development to version control mastery, I thrive on sharing knowledge and learning constantly. Outside of tech, I explore sculpting, drawing, and composing music—hobbies that fuel my creativity and problem-solving in every project.`}
      />
      {/* Contenedor de las tarjetas de conocimientos */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {knowledgeData.map((item, idx) => (
          <Card
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default KnowledgeSection;
