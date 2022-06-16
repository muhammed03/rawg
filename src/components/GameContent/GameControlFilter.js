import { useContext } from 'react';
import styled from 'styled-components';
import { color } from '../styles/custom.styled';

import GamesListContext from '../../contexts/GamesListContext';

import DropDownIcon from '../../assets/icons/drop-down-icon.svg';

const SelectContainer = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  color: ${color.primary};
  font-size: 0.875rem;
  width: auto;
  padding: 0.625rem 1.5rem 0.625rem 1rem;
  border-radius: 0.5rem;
  background-color: ${color.secondaryBg};
  border: none;
  -webkit-appearance: none;
`;

const SelectImg = styled.img`
  position: absolute;
  top: 50%;
  right: 0.7rem;
  width: 0.5rem;
  transform: rotate(90deg) translateX(-50%);
`;

const GameControlFilter = () => {
  const { setPlatform } = useContext(GamesListContext);
  const handleChange = (e) => {
    e.preventDefault();
    setPlatform(e.target.value);
  };

  return (
    <SelectContainer>
      <StyledSelect onChange={handleChange} defaultValue="">
        <option value="">Filter by: Platforms</option>
        <option value="1">PC</option>
        <option value="2">PlayStation</option>
        <option value="3">Xbox</option>
        <option value="4">IOS</option>
        <option value="5">Android</option>
        <option value="6">Apple Macintosh</option>
        <option value="7">Linux</option>
        <option value="8">Nintendo</option>
        <option value="9">Web</option>
      </StyledSelect>
      <SelectImg src={DropDownIcon} />
    </SelectContainer>
  );
};

export default GameControlFilter;
