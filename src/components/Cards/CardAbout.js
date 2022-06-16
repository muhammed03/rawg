import { useState } from 'react';
import styled from 'styled-components';
import { color } from '../styles/custom.styled';

import DropDownIcon from '../../assets/icons/drop-down-icon.svg';
import { convertDateString } from '../../utils/helpers';

const StyledCardAbout = styled.div`
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

const CardAboutItem = styled.li`
  display: flex;
  align-items: baseline;
  padding: 0.75rem 0;
  justify-content: space-between;
  border-bottom: 1px solid ${color.tertiary};
`;

const CardAboutItemCenter = styled.li`
  display: flex;
  align-items: baseline;
  padding-top: 0.75rem;
  justify-content: center;
  text-decoration: underline;
  line-height: 1;
  cursor: pointer;
`;

const CardAboutTerm = styled.span`
  color: ${color.tertiary};
`;

const CardAboutDesc = styled.span`
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

function CardAbout(props) {
  const [showMoreState, setShowMoreState] = useState(switchControls.off);
  const {
    aboutInfo: { genres, releasedDate, rating },
  } = props;

  const publishedDate = convertDateString(releasedDate);

  return (
    <StyledCardAbout>
      <StyledAboutList>
        <CardAboutItemCenter
          className={showMoreState !== switchControls.off && 'display-none'}
          onClick={() => setShowMoreState(switchControls.on)}
        >
          View more
        </CardAboutItemCenter>
        <CardAboutItem className={showMoreState !== switchControls.on && 'display-none'}>
          <CardAboutTerm>Release date:</CardAboutTerm>
          <CardAboutDesc>{publishedDate}</CardAboutDesc>
        </CardAboutItem>
        <CardAboutItem className={showMoreState !== switchControls.on && 'display-none'}>
          <CardAboutTerm>Genres:</CardAboutTerm>
          <CardAboutDesc>
            {genres
              .map((genre) => {
                return genre.name;
              })
              .join(', ')}
          </CardAboutDesc>
        </CardAboutItem>
        <CardAboutItem className={showMoreState !== switchControls.on && 'display-none'}>
          <CardAboutTerm>rating:</CardAboutTerm>
          <CardAboutDesc>#{rating}</CardAboutDesc>
        </CardAboutItem>
        <CardAboutItemCenter
          className={showMoreState !== switchControls.on && 'display-none'}
          onClick={() => setShowMoreState(switchControls.off)}
        >
          View less
        </CardAboutItemCenter>
      </StyledAboutList>
      <ShowMoreBtn className={showMoreState !== switchControls.on && 'display-none'}>
        <span>Show more like this</span>
        <ShowMoreIcon />
      </ShowMoreBtn>
    </StyledCardAbout>
  );
}

export default CardAbout;
