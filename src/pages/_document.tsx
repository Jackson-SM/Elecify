import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '@/config/stitches.config';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Vacuum</title>
                <meta name="description" content="Vacuum" />
                <meta name="author" content="Jackson Magalhães" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
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
