import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../styles/custom.styled';

const LogoContainer = styled.div`
  width: auto;
  padding-left: 10px;
`;

const StyledLogo = styled.div`
  font-size: 1.125rem;
  font-weight: 900;
  font-family: 'Blink-bold', sans-serif;
  line-height: 1;
  letter-spacing: 0.3125rem;
  color: ${color.primary};
`;

function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <StyledLogo>RAWG</StyledLogo>
      </Link>
    </LogoContainer>
  );
}

export default Logo;
