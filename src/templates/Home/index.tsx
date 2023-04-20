import { Navbar } from '@/components/Navbar';
import React from 'react';
import { SectionHero } from './Components/SectionHero';
import { SectionAboutUs } from './Components/SectionAboutUs';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <SectionHero />
        <SectionAboutUs />
      </main>
    </>
  );
};

export default Home;
