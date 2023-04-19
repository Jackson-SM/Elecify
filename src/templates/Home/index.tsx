import { Navbar } from '@/components/Navbar';
import React from 'react';
import { SectionHero } from './Components/SectionHero';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <SectionHero />
      </main>
    </>
  );
};

export default Home;
