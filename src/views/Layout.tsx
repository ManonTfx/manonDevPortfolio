import Header from '@components/header/Header';
import { useEffect, useMemo, useState } from 'react';
import MenuBuger from '@components/menuBurger/MenuBuger';
import { ColorModeContext, MenuBurgerContext } from '../context';

interface ILayoutProps {
  children: JSX.Element;
}

function Layout({ children }: ILayoutProps): JSX.Element {
  const [colorActive, setColorActive] = useState<string>('#B80F6A');
  const [menuBurgerIsOpen, setMenuBurgerIsOpen] = useState(false);
  const [selectionColor, setSelectionColor] = useState<string>('pink');

  const colorModeContextValue = useMemo(
    () => ({
      colorActive,
      updateColorActive: setColorActive,
      selectionColor,
      updateSelectionColor: setSelectionColor,
    }),
    [colorActive, selectionColor]
  );

  const menuBurgerContextValue = useMemo(
    () => ({
      menuBurgerIsOpen,
      updateMenuBurgerIsOpen: setMenuBurgerIsOpen,
    }),
    [menuBurgerIsOpen]
  );

  useEffect(() => {
    switch (colorActive) {
      case '#B80F6A':
        setSelectionColor('pink');
        break;
      case '#FC9700':
        setSelectionColor('orange');
        break;
      case '#0FB87B':
        setSelectionColor('green');
        break;
      default:
    }
  }, [colorActive]);

  return (
    <MenuBurgerContext.Provider value={menuBurgerContextValue}>
      <ColorModeContext.Provider value={colorModeContextValue}>
        <div
          style={{
            backgroundColor:
              colorActive === '#202020' ? colorActive : '#ffffff',
          }}
          className="pt-[3rem] max-w-screen"
        >
          <Header />
          <MenuBuger />
          <div
            className="transition-all duration-500"
            style={{ opacity: menuBurgerIsOpen ? 0 : 1 }}
          >
            {children}
          </div>
        </div>
      </ColorModeContext.Provider>
    </MenuBurgerContext.Provider>
  );
}

export default Layout;
