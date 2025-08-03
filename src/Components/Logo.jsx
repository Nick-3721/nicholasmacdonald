import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
    justify-self: start; 
`;

const StyledLogo = styled.svg`
    fill: ${({ theme }) => theme.secondaryColor};
    height: 50px;
    /* cursor: pointer; */
`;

export default function Logo() {
  return (
    <LogoContainer data-cursor="hover">
      <Link to="/">
        <StyledLogo xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="6 0 20 32">
          <polygon points="6.7 9.8 6.6 9.8 6.6 13.1 6.6 26.9 6.6 26.9 10.4 26.9 10.4 32 10.5 32 17.8 32 19.6 32 6.7 9.8"/>
          <polygon points="21.5 5.1 21.5 0 21.3 0 14.1 0 12.3 0 25.2 22.2 25.3 22.2 25.3 18.9 25.3 5.1 25.3 5.1 21.5 5.1"/>
        </StyledLogo>
      </Link>
    </LogoContainer>
  )
}
