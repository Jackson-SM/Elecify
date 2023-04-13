import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Vacuum</title>
            </Head>
            <main></main>
        </>
    );
}
