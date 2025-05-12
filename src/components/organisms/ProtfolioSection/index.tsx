'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import CardPortfolio from '../ProtfolioSection/CardPortfolio';
import LabelIntroduction from '@/components/molecules/LabelIntroduction';
import Dialog from '@/components/molecules/Dialog';
import LabelCard from '@/components/molecules/LabelCard';
import ButtonMain from '@/components/molecules/ButtonMain';

//Array de proyectos de portafolio
const portfolioData = [
  {
    title: 'Project NERV',
    description:
      'A covert initiative allegedly tasked with “protecting” humanity from existential threats—mostly giant robots and interdimensional beings. Totally harmless, we swear.',
    imgSrc: 'Nerv.webp',
    imgAlt: 'Proyecto 1',
  },
  {
    title: 'Project Scarlet Nexus',
    description:
      'An experimental neural interface that “enhances” cognition by syncing your brain to a parallel crimson realm. Side effects may include sporadic telepathy and the urge to narrate your life in dramatic monologues.',
    imgSrc: 'ScarletNexus.webp',
    imgAlt: 'Proyecto 2',
  },
  {
    title: 'Project Umbrella',
    description:
      'Your friendly neighborhood biotech venture, devoted to groundbreaking “viral research” under exceptionally secure conditions. Absolutely nothing to see here—just harmless night-time lab experiments and occasional zombie-free weekends.',
    imgSrc: 'Umbrella.webp',
    imgAlt: 'Proyecto 3',
  },
  {
    title: 'Project Akatsuki',
    description:
      'A sunrise-obsessed think tank that claims to harness solar flares for clean energy… and mild world domination. Results pending meteorological validation.',
    imgSrc: 'Akatsuki.webp',
    imgAlt: 'Proyecto 4',
  },
  {
    title: 'Project YorHa',
    description:
      'A robotics program designing android custodians to keep the planet tidy—one post-apocalyptic cleanup at a time. Fully autonomous, emotionally unavailable, and guaranteed to never borrow your charger.',
    imgSrc: 'YorHa.webp',
    imgAlt: 'Proyecto 5',
  },
  {
    title: 'Project S.H.I.E.L.D',
    description:
      'A “strategic” global defense network that coordinates elite agents, flying winged carriers, and cryptic code names. Completely legit—no alien invasions or superpowered overlords involved.',
    imgSrc: 'Shield.webp',
    imgAlt: 'Proyecto 6',
  },
  {
    title: 'Project Aperture',
    description:
      'A forward-thinking R&D lab focused on “portal technology” for seamless room-to-room teleportation. Only minor discrepancies in spatial integrity; side effects include spontaneous cake cravings.',
    imgSrc: 'Aperture.webp',
    imgAlt: 'Proyecto 7',
  },
];

// Sección de portafolio
const PortfolioSection: React.FC = () => {
  //Referencia del carousel de proyectos
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 3,
      spacing: 30,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 12 },
      },
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 1920px)': {
        slides: { perView: 4, spacing: 50 },
      },
    },
  });

  //Estado del dialogo de un proyecto
  const [dialogOpen, setDialogOpen] = React.useState(false);
  //Estado del proyecto seleccionado
  const [selectedProject, setSelectedProject] = React.useState<
    (typeof portfolioData)[0] | null
  >(null);

  //Función para abrir el dialogo de un proyecto
  const handleLearnMore = (project: (typeof portfolioData)[0]) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  //Renderizado de la sección de portafolio
  return (
    <section className="py-12 bg-background">
      <LabelIntroduction
        title="Portfolio"
        description="Here you’ll find a showcase of my most ‘impressive’ projects—though, full disclosure, they’re entirely fictional for now! Think multi-service game hubs, real-time data dashboards, and AI-powered chatbots…all awaiting their grand debut once I stop perfecting my CV."
        className="mb-8 text-center"
      />
      {/* Contenedor de las tarjetas de portafolio */}
      <div ref={sliderRef} className="keen-slider">
        {portfolioData.map((item, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <CardPortfolio
              {...item}
              onLearnMore={() => handleLearnMore(item)}
            />
          </div>
        ))}
      </div>
      {/* Dialogo de un proyecto */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        {selectedProject && (
          <>
            <img
              src={selectedProject.imgSrc}
              alt={selectedProject.imgAlt}
              className="max-w-sm mb-4 "
            />
            <LabelCard
              title={selectedProject.title}
              description={selectedProject.description}
              className="items-start max-w-sm mb-4 text-left"
            />

            <ButtonMain
              title="Close"
              className="px-4 py-2 mt-4 rounded max-h-11"
              onClick={() => {
                setDialogOpen(false);
              }}
            />
          </>
        )}
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
