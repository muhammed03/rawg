import { useState } from 'react';
import styled from 'styled-components';
import { color } from '../styles/custom.styled';

import DropDownIcon from '../../assets/icons/drop-down-icon.svg';

const GameCardAboutWrapper = styled.div`
  position: absolute;
  left: 0;
  background-color: ${color.secondaryBg};
  z-index: 11;
  width: 100%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const StyledAboutList = styled.ul`
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0.25rem 0 0;
  padding: 1rem;
  list-style: none;
`;

const GameCardAboutItem = styled.li`
  display: flex;
  align-items: baseline;
  padding: 0.75rem 0;
  justify-content: space-between;
  border-bottom: 1px solid ${color.tertiary};
`;

const GameCardAboutItemCenter = styled.li`
  display: flex;
  align-items: baseline;
  padding-top: 0.75rem;
  justify-content: center;
  text-decoration: underline;
  line-height: 1;
  cursor: pointer;
`;

const GameCardAboutTerm = styled.span`
  color: ${color.tertiary};
`;

const GameCardAboutDesc = styled.span`
  color: ${color.primary};
  text-align: right;
`;

const ShowMoreBtn = styled.a`
  position: relative;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: ${color.tertiaryBg};
  font-size: 0.876rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0.75rem 1rem;
`;

const ShowMoreIcon = styled.div`
  display: block;
  width: 0.75rem;
  height: 1.125rem;
  margin-left: 0.375rem;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url(${DropDownIcon});
  opacity: 0.2;
`;

const switchControls = {
  on: 'on',
  off: 'off',
};

function GameCardAboutList(props) {
  const [showMoreState, setShowMoreState] = useState(switchControls.off);
  const {
    // eslint-disable-next-line react/prop-types
    aboutInfo: { genres, releasedDate, rating },
  } = props;

  const publishedDate = new Date(releasedDate).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <GameCardAboutWrapper>
      <StyledAboutList>
        <GameCardAboutItemCenter
          className={showMoreState !== switchControls.off && 'display-none'}
          onClick={() => setShowMoreState(switchControls.on)}
        >
          View more
        </GameCardAboutItemCenter>
        <GameCardAboutItem className={showMoreState !== switchControls.on && 'display-none'}>
          <GameCardAboutTerm>Release date:</GameCardAboutTerm>
          <GameCardAboutDesc>{publishedDate}</GameCardAboutDesc>
        </GameCardAboutItem>
        <GameCardAboutItem className={showMoreState !== switchControls.on && 'display-none'}>
          <GameCardAboutTerm>Genres:</GameCardAboutTerm>
          <GameCardAboutDesc>
            {genres
              .map((genre) => {
                return genre.name;
              })
              .join(', ')}
          </GameCardAboutDesc>
        </GameCardAboutItem>
        <GameCardAboutItem className={showMoreState !== switchControls.on && 'display-none'}>
          <GameCardAboutTerm>rating:</GameCardAboutTerm>
          <GameCardAboutDesc>#{rating}</GameCardAboutDesc>
        </GameCardAboutItem>
        <GameCardAboutItemCenter
          className={showMoreState !== switchControls.on && 'display-none'}
          onClick={() => setShowMoreState(switchControls.off)}
        >
          View less
        </GameCardAboutItemCenter>
      </StyledAboutList>
      <ShowMoreBtn className={showMoreState !== switchControls.on && 'display-none'}>
        <span>Show more like this</span>
        <ShowMoreIcon />
      </ShowMoreBtn>
    </GameCardAboutWrapper>
  );
}

export default GameCardAboutList;
