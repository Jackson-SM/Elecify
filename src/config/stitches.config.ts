import { createStitches } from '@stitches/react';

export const { styled, keyframes, getCssText, theme, css, globalCss } =
    createStitches({
        theme: {
            colors: {
                background: '#212227',
                backgroundLight: '#2D2E32',
                backgroundLight2: '#3D3E40',

                primary: '#8332ac',
                tertiary: '#56A3E2',

                text: '#f1f1f1',
                textLight: '#e2e2e2',
                textLight2: '#cdcdcd',
            },
        },
    });
