'use client';
import React, { useState } from 'react';
import Title from '../../atoms/texts/Title';
import BodyText from '../../atoms/texts/BodyText';
import MainButton from '../../molecules/ButtonMain';
import Dialog from '../../molecules/Dialog';
import LabelCard from '@/components/molecules/LabelCard';
import ButtonMain from '../../molecules/ButtonMain';

//Hero de la app
const Hero: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="py-0 bg-surface min-h-[600px] md:min-h-[700px] flex items-center"
      id="hero"
    >
      {/* Contenedor principal de la sección Hero */}
      <div className="container flex flex-col-reverse items-center min-h-full gap-10 md:flex-row md:items-stretch">
        {/* Columna izquierda: texto */}
        <div className="flex flex-col justify-center w-full px-4 text-left md:pl-20 md:w-1/2">
          <Title className="mt-10 mb-10 font-bold break-words md:-mr-9">
            I'm David García
            <br />
            <span className="text-primary">Full-Stack </span>Developer
          </Title>
          <BodyText className="mb-12 md:text-xl text-secondary">
            Full-Stack Developer with a strong background in Systems Engineering
            and proven experience designing clean architectures, building
            REST/GraphQL APIs, and deploying containerized applications.
            Passionate about web security, CI/CD automation, and seamlessly
            integrating front-end and back-end solutions.
          </BodyText>
          <MainButton
            title="HIRE ME →"
            className="w-40 mb-14"
            onClick={() => setOpen(true)}
          />
        </div>
        {/* Columna derecha: foto */}
        <div className="overflow-hidden md:w-1/2 ">
          <img
            src="/Silhouette.webp"
            alt="David García"
            style={{ scale: '1.25' }}
          />
        </div>
      </div>
      {/* Dialogo del Hero*/}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <LabelCard
          title="Thanks for your interest!"
          description={
            <>
              I'm flattered—really, I am.
              <br />
              If you'd like to discuss world-changing projects, top-secret
              missions, or just offer me coffee and a contract, let's talk on{' '}
              <span>
                <a
                  href="https://www.linkedin.com/in/david-camilo-garcia-echavarria-22b69532b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary hover:text-primary"
                >
                  LinkedIn
                </a>
              </span>
              .<br />
              It's like email... but with endorsements.
            </>
          }
          className="mb-4"
        />
        <ButtonMain
          title="Close"
          className="max-h-10"
          onClick={() => setOpen(false)}
        />
      </Dialog>
    </section>
  );
};

export default Hero;
