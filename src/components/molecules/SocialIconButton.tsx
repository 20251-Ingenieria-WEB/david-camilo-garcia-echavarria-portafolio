import React from 'react';

//Iconos de redes sociales de la app
const SocialIconButton: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
}> = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 transition-colors hover:text-primary text-text-main"
  >
    {children}
  </a>
);

export default SocialIconButton;
