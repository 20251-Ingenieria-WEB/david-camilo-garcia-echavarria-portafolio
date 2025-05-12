import React from 'react';

//Footer de la app
const Footer: React.FC = () => (
  <footer className="w-full h-10 py-4 text-sm text-center bg-surface text-secondary">
    &copy; {new Date().getFullYear()} David García. No rights reserved.
  </footer>
);

export default Footer;
