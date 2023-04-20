import React from 'react';
import { StyledSectionAboutUs } from './styles';
import { CardAbout } from './Components/CardAbout';

export const SectionAboutUs = () => {
  return (
    <StyledSectionAboutUs>
      <CardAbout title="Comunidade" />
      <CardAbout title="Aprendizado" />
      <CardAbout title="Conexões" />
      <CardAbout title="Projetos" />
    </StyledSectionAboutUs>
  );
};
