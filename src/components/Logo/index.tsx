import React from 'react';
import LogoSvg from '../../assets/logo_2_without_letter.png';
import * as StyledLogo from './styles';

type LogoProps = React.ComponentProps<typeof StyledLogo.StyledLogo>;

export const Logo = (props: LogoProps) => {
  return (
    <StyledLogo.StyledLogo {...props}>
      <img src={`${LogoSvg}`} />
      <StyledLogo.LogoVacuumText>
        <span>V</span>acuum
      </StyledLogo.LogoVacuumText>
    </StyledLogo.StyledLogo>
  );
};
