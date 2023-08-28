import { useContext } from 'react';
import { MenuBurgerContext } from '../context';

function MenuBurger(): JSX.Element {
  const { menuBurgerIsOpen, updateMenuBurgerIsOpen } =
    useContext(MenuBurgerContext);

  const nav = [
    {
      name: 'HOME',
      link: '/',
    },
    {
      name: 'ABOUT',
      link: '/about',
    },
    {
      name: 'PROJECTS',
      link: '/projects',
    },
    {
      name: 'CONTACT',
      link: '/contact',
    },
  ];
  return (
    <div
      style={{ zIndex: menuBurgerIsOpen ? 9999 : -9999, top: 120 }}
      className="overflow-hidden transition-all w-full ease max-h-screen h-screen absolute "
    >
      <div
        className="w-full absolute"
        style={{
          height: menuBurgerIsOpen ? '100%' : '0%',
          transition: 'height 3s',
          display: 'flex',
          justifyContent: 'center',
          bottom: 0,
        }}
      >
        <div
          className="flex flex-col bg-white"
          style={{
            width: 'calc(100% - 10rem)',
          }}
        >
          {nav.map((item) => (
            <a
              href="#projects"
              onClick={() => updateMenuBurgerIsOpen(false)}
              className="font-normal text-[7rem] border-b pl-5"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuBurger;
