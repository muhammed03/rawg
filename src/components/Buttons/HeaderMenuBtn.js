import { useContext } from 'react';
import styled from 'styled-components';

import { BurgerContext } from '../../contexts/BurgerContext';
import MenuIcon from '../../assets/icons/burger-menu-icon';

const MenuBtn = styled.div`
  position: relative;
  cursor: pointer;
  overflow-y: hidden;
  line-height: 0;
`;

function HeaderMenuBtn() {
  const { openBurgerMenu } = useContext(BurgerContext);

  return (
    <MenuBtn role="button" onClick={openBurgerMenu}>
      <span>
        <MenuIcon />
      </span>
    </MenuBtn>
  );
}

export default HeaderMenuBtn;
