import React from 'react';
import * as S from './styles';
import { TextGradient } from '@/components/TextGradient';

import backgroundSpiral from '../../../assets/background_2.svg';

export const SectionHero = () => {
  return (
    <S.StyledSectionHero>
      <S.StyledBackgroundHero>
        <img src={backgroundSpiral} />
      </S.StyledBackgroundHero>
      <S.StyledContentHero>
        <TextGradient size="lg_large">
          Vacuum, A melhor Comunidade de T.I da América Latina.
        </TextGradient>
        <TextGradient size="sm" themeGradient="with_color_dark_2">
          Bem-vindo à Vacuum, a comunidade perfeita para desenvolvedores
          iniciantes! Aqui, você encontrará um espaço acolhedor e inclusivo para
          aprender e crescer na programação. Nossa comunidade é formada por
          desenvolvedores experientes, ansiosos para compartilhar seu
          conhecimento e apoiar você em sua jornada de aprendizado. Com recursos
          como tutoriais, projetos em grupo e sessões de codificação ao vivo,
          você estará pronto para dominar a arte da programação. Junte-se a nós
          na Vacuum e vamos codificar juntos!
        </TextGradient>
      </S.StyledContentHero>
    </S.StyledSectionHero>
  );
};
