import { useContext } from 'react';
import styled from 'styled-components';
import { fontColor } from '../styles/custom.styled';

import { BurgerContext } from '../../contexts/BurgerContext';
import MenuLinksContainer from './MenuLinksContainer';
import MenuCloseContainer from './MenuCloseContainer';
import BrowseContainer from './BrowseContainer';

const ContentOverlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  content: '';
  transition: opacity 0.3s ease-out;
`;

const DropDownContainer = styled.div`
  position: fixed;
  height: calc(100% - 32px);
  max-height: 708px;
  min-width: 310px;
  top: 12px !important;
  right: 5px !important;
  overflow-y: scroll;
`;

const DropDownContent = styled.div`
  position: relative;
  display: block;
  background-color: ${fontColor.primary};
  height: 100%;
  overflow-y: auto;
  border-radius: 1.5rem;
  padding: 1.5rem;
`;

const DropDownMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DropDownMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${fontColor.secondary};
`;

function BurgerMenuContent() {
  const { burgerMenuOpened } = useContext(BurgerContext);

  return (
    <div>
      <ContentOverlay
        className={burgerMenuOpened ? 'drop-down-menu-opened' : 'drop-down-menu-closed'}
      />
      <DropDownContainer
        className={burgerMenuOpened ? 'drop-down-menu-opened' : 'drop-down-menu-closed'}
      >
        <DropDownContent>
          <DropDownMenuWrapper>
            <DropDownMenu>
              <MenuLinksContainer />
              <MenuCloseContainer />
              <BrowseContainer />
            </DropDownMenu>
          </DropDownMenuWrapper>
        </DropDownContent>
      </DropDownContainer>
    </div>
  );
}

export default BurgerMenuContent;
