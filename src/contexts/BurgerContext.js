import { createContext, useState } from 'react';

const BurgerContext = createContext({});

// eslint-disable-next-line react/prop-types
const BurgerMenuProvider = ({ children }) => {
  const [burgerMenuOpened, setBurgerView] = useState(false);

  const closeBurgerMenu = () => {
    setBurgerView(false);
  };

  const openBurgerMenu = () => {
    setBurgerView(true);
  };

  return (
    <BurgerContext.Provider value={{ burgerMenuOpened, closeBurgerMenu, openBurgerMenu }}>
      {children}
    </BurgerContext.Provider>
  );
};

export { BurgerContext };

export default BurgerMenuProvider;
