import { useContext } from 'react';
import styled from 'styled-components';

import { BurgerContext } from '../../contexts/BurgerContext';
import BurgerCloseIcon from '../../assets/icons/burger-close-icon.svg';

const MenuCloseWrapper = styled.div`
  position: relative;
  width: 25%;
  top: -0.5rem;
  left: 1.125rem;
`;

const MenuCloseIcon = styled.div`
  background: url(${BurgerCloseIcon}) no-repeat 50% / contain;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem auto;
  line-height: 1;
`;

function MenuCloseContainer() {
  const { closeBurgerMenu } = useContext(BurgerContext);

  return (
    <MenuCloseWrapper>
      <MenuCloseIcon role="button" onClick={closeBurgerMenu} />
    </MenuCloseWrapper>
  );
}

export default MenuCloseContainer;
