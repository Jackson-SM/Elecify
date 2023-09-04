import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '@/config/stitches.config';
import { GlobalCss } from '@/styles/globalCss';

export default function Document() {
  GlobalCss();

  return (
    <Html lang="en">
      <Head>
        <title>Elecify</title>
        <meta name="description" content="Elecify" />
        <meta name="author" content="Jackson Magalhães" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
