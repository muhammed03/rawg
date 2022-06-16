import { useContext } from 'react';
import styled from 'styled-components';
import { color } from '../styles/custom.styled';

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
  z-index: 15;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
`;

const DropDownContainer = styled.div`
  position: fixed;
  height: calc(100% - 32px);
  max-height: 708px;
  min-width: 310px;
  top: 12px !important;
  right: 5px !important;
  overflow-y: scroll;
  transition: opacity 0.3s linear;
  z-index: 15;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
`;

const DropDownContent = styled.div`
  position: relative;
  display: block;
  background-color: ${color.primary};
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
  color: ${color.secondary};
`;

function BurgerMenuContent() {
  const { burgerMenuOpened, closeBurgerMenu } = useContext(BurgerContext);

  return (
    <>
      <ContentOverlay onClick={closeBurgerMenu} isOpen={burgerMenuOpened} />
      <DropDownContainer isOpen={burgerMenuOpened}>
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
    </>
  );
}

export default BurgerMenuContent;
