import React from 'react';
import { Inter } from 'next/font/google';
import Home from '@/templates/Home';

const inter = Inter({ subsets: ['latin'] });

export default function Index() {
  return <Home />;
}
