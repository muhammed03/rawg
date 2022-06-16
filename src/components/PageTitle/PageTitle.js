import styled from 'styled-components';
import { color, device } from '../styles/custom.styled';

const StyledTitle = styled.h1`
  color: ${color.primary};
  font-size: 2.25rem;
  margin: 0;

  @media ${device.tablet} {
    font-size: 3.5rem;
  }

  @media ${device.laptop} {
    font-size: 4.5rem;
  }
`;

function PageTitle(props) {
  const { children: title } = props;
  return <StyledTitle>{title}</StyledTitle>;
}

export default PageTitle;
