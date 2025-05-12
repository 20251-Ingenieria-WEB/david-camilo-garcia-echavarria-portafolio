import React from 'react';

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

//Subtitulo de la app
const Subtitle: React.FC<SubtitleProps> = ({ children, className = '' }) => (
  <h2 className={`text-4xl md:text-5xl font-bold text-text-main ${className}`}>
    {children}
  </h2>
);

export default Subtitle;
