import type { Metadata } from 'next';
import React from 'react';
import '../styles/globals.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='pt-BR'>
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;