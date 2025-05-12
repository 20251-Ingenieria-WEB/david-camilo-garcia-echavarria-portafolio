import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

//Titulo de la app
const Title: React.FC<TitleProps> = ({ children, className = '' }) => (
  <h1 className={`text-5xl md:text-6xl font-bold text-text-main ${className}`}>
    {children}
  </h1>
);

export default Title;
