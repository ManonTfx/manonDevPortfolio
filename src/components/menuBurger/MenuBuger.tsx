import { useContext } from 'react';
import { ColorModeContext, MenuBurgerContext } from '../../context';
import OneLink from './OneLink';

function MenuBurger(): JSX.Element {
  const { menuBurgerIsOpen } = useContext(MenuBurgerContext);
  const { colorActive } = useContext(ColorModeContext);

  const nav = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];

  return (
    <div
      style={{
        zIndex: menuBurgerIsOpen ? 9999 : -9999,
        top: 120,
      }}
      className="overflow-hidden transition-all w-full ease max-h-screen h-screen absolute "
    >
      <div
        className="w-full absolute transition-all duration-500 "
        style={{
          height: menuBurgerIsOpen ? '100%' : '0%',
          display: 'flex',
          justifyContent: 'center',
          bottom: 0,
        }}
      >
        <div
          className="flex flex-col bg-white"
          style={{
            width: 'calc(100% - 10rem)',
            backgroundColor: colorActive !== '#202020' ? '' : colorActive,
          }}
        >
          {nav.map((item) => (
            <OneLink item={item} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuBurger;
