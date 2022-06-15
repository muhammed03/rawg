import styled from 'styled-components';
import { color } from '../styles/custom.styled';

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
    <div className="header__item">
      <a href="/">
        <StyledLogo>RAWG</StyledLogo>
      </a>
    </div>
  );
}

export default Logo;
