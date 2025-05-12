import React from 'react';
import { ReactNode } from 'react';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <head>{}</head>
      <body className="h-full min-h-full font-sans text-base bg-background">
        {children}
      </body>
    </html>
  );
}
