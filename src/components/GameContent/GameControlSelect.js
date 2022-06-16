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

const GameControlSelect = () => {
  const { setOrder } = useContext(GamesListContext);
  const handleChange = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
  };

  return (
    <SelectContainer>
      <StyledSelect onChange={handleChange} defaultValue="-rating">
        <option value="released">Order by: Lately released</option>
        <option value="-released">Order by: Upcoming releases</option>
        <option value="-rating">Order by: Top rating</option>
        <option value="rating">Order by: Lowly rating</option>
      </StyledSelect>
      <SelectImg src={DropDownIcon} />
    </SelectContainer>
  );
};

export default GameControlSelect;
