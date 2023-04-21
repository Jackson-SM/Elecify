import React from 'react';
import { StyledSectionAboutUs } from './styles';
import { CardAbout } from './Components/CardAbout';
import Diversity3 from '@mui/icons-material/Diversity3';
import Diversity2 from '@mui/icons-material/Diversity2';
import Groups3Icon from '@mui/icons-material/Groups3';
import SchoolIcon from '@mui/icons-material/School';

export const SectionAboutUs = () => {
  return (
    <StyledSectionAboutUs>
      <CardAbout title="Comunidade" icon={<Diversity3 />}>
        Somos um grupo de desenvolvedores dedicados a ajudar iniciantes na
        carreira de programação a se desenvolver e melhorar seus conhecimentos
        em programação. Nós entendemos que começar nesta área pode ser difícil,
        especialmente sem experiência ou suporte, por isso criamos uma
        comunidade acolhedora e inclusiva para que todos possam ter acesso aos
        recursos e suporte necessários para crescer como programador.
      </CardAbout>
      <CardAbout title="Aprendizado" icon={<SchoolIcon />}>
        Acreditamos que a melhor maneira de aprender é através da prática e da
        colaboração com outras pessoas. É por isso que em nossa comunidade
        incentivamos projetos de código aberto, onde os membros podem trabalhar
        em conjunto em soluções reais para problemas reais.
      </CardAbout>
      <CardAbout title="Conexões" icon={<Diversity2 />}>
        Valorizamos muito as conexões entre nossos membros. Sabemos que, no
        mundo da tecnologia, ter uma rede de contatos é essencial para encontrar
        oportunidades, obter suporte e expandir seus horizontes profissionais.
        Por isso, criamos uma comunidade acolhedora e inclusiva para ajudar os
        membros a se conectar e se beneficiar uns dos outros.
      </CardAbout>
      <CardAbout title="Projetos" icon={<Groups3Icon />}>
        Temos vários projetos em andamento em nossa comunidade, desde pequenos
        projetos de código aberto até projetos maiores que envolvem várias
        tecnologias. Todos os nossos projetos são liderados por membros da
        comunidade e são desenvolvidos em conjunto por uma equipe de
        desenvolvedores talentosos.
      </CardAbout>
    </StyledSectionAboutUs>
  );
};
