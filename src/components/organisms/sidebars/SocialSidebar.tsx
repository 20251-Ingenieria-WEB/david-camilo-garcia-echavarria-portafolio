import React from 'react';
import GithubIcon from '../../atoms/icons/github.svg';
import SocialIconButton from '../../molecules/SocialIconButton';
import CardTitle from '../../atoms/texts/TitleCard';
import LinkedinIcon from '../../atoms/icons/linkedin.svg';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/david-camilo-garcia-echavarria-22b69532b/',
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/davidc-garciae',
    icon: <GithubIcon />,
    label: 'GitHub',
  },
];

//Sidebar derecho de la app con iconos de redes sociales
const SocialSidebar: React.FC = () => (
  <aside className="sticky top-0 h-screen max-h-10 sm:max-h-full">
    <nav className="flex flex-col items-center min-h-full gap-6 p-4 py-4 bg-surface">
      {/* Título de la sección */}
      <CardTitle className="mt-16 font-bold text-center">Links</CardTitle>
      {/* Contenedor de los iconos de las redes sociales */}
      {socialLinks.map(({ href, icon, label }) => (
        <SocialIconButton key={label} href={href} label={label}>
          {icon}
        </SocialIconButton>
      ))}
    </nav>
  </aside>
);

export default SocialSidebar;
