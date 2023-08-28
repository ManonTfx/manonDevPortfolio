import Hamburger from 'hamburger-react';
import { useContext } from 'react';
import { ColorModeContext, MenuBurgerContext } from '../../context';

function ButtonMenuHamburger() {
  const { colorActive } = useContext(ColorModeContext);
  const { menuBurgerIsOpen, updateMenuBurgerIsOpen } =
    useContext(MenuBurgerContext);

  return (
    <div
      id="reference-button"
      style={{ borderColor: colorActive }}
      className="button-container h-12 overflow-hidden flex items-center border border-1 py-1 rounded-[8px]"
    >
      <Hamburger
        color={colorActive === '#0E0000' ? '#ffffff' : '#202020'}
        toggled={menuBurgerIsOpen}
        toggle={updateMenuBurgerIsOpen}
        size={17}
      />
    </div>
  );
}

export default ButtonMenuHamburger;
