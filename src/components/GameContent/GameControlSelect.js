import styled from 'styled-components';
import { color } from '../styles/custom.styled';

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
  return (
    <SelectContainer>
      <StyledSelect>
        <option>Order by: Relevance</option>
        <option selected>Order by: Date added</option>
        <option>Order by: Name</option>
      </StyledSelect>
      <SelectImg src={DropDownIcon} />
    </SelectContainer>
  );
};

export default GameControlSelect;
