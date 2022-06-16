import styled from 'styled-components';
import { color, device } from '../styles/custom.styled';

const StyledMetaBlock = styled.dl`
  width: 50%;
  &:nth-last-child {
    width: 100%;
  }

  &:nth-child(odd) {
    margin-bottom: 0.685rem;
  }
`;

const StyledMetaBlockTitle = styled.dt`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${color.tertiary};
  margin-bottom: 0.5rem;

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

const StyledMetaBlockDescription = styled.dd`
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 0.7;
  margin-bottom: 0.5rem;
  line-height: 1.2rem;
  text-decoration: underline;
  word-break: break-word;

  a {
    color: ${color.primary};
  }

  span {
    color: ${color.primary};
  }

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

function DetailMetaBlockTag({ term, description }) {
  return (
    <StyledMetaBlock>
      <StyledMetaBlockTitle>{term}</StyledMetaBlockTitle>
      <StyledMetaBlockDescription>
        {description !== `Website wasn't found!` ? (
          <a href={description}>{description}</a>
        ) : (
          <span>{description}</span>
        )}
      </StyledMetaBlockDescription>
    </StyledMetaBlock>
  );
}

export default DetailMetaBlockTag;
