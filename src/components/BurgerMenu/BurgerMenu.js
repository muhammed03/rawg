import styled from 'styled-components';

import HeaderMenuButton from '../Buttons/HeaderMenuBtn';
import BurgerMenuContent from './BurgerMenuContent';
import BurgerMenuProvider from '../../contexts/BurgerContext';

import './style.scss';

const MenuWrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  padding-right: 1rem;
`;

const HeaderMenu = styled.div`
  padding: 0.625rem 0;
`;

function BurgerMenu() {
  return (
    <div className="header__item">
      <MenuWrapper>
        <HeaderMenu>
          <BurgerMenuProvider>
            <HeaderMenuButton />
            <BurgerMenuContent />
          </BurgerMenuProvider>
        </HeaderMenu>
      </MenuWrapper>
    </div>
  );
}

export default BurgerMenu;
