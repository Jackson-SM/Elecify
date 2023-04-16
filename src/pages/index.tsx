import React from 'react';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { SectionHero } from '@/templates/Home/SectionHero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <SectionHero />
      </main>
    </>
  );
}
