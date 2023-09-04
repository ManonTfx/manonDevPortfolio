/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import { ColorModeContext, MenuBurgerContext } from '@utils/context';
import { nav } from '@utils/datas';
import { useTranslation } from 'react-i18next';
import OneLink from './OneLink';

function MenuBurger(): JSX.Element {
  const { t } = useTranslation();

  const { menuBurgerIsOpen } = useContext(MenuBurgerContext);
  const { colorActive } = useContext(ColorModeContext);

  return (
    <div
      style={{
        zIndex: menuBurgerIsOpen ? 9999 : -9999,
        top: 120,
      }}
      className="overflow-hidden transition-all w-full ease max-h-screen h-screen absolute"
    >
      <div
        className="absolute transition-all duration-500 lg:pl-0 pl-[2rem] lg:pl-[4rem] lg:flex lg:w-[calc(100% - 10rem)] w-full"
        style={{
          height: menuBurgerIsOpen ? '100%' : '0%',
          bottom: 0,
        }}
      >
        <div
          className="flex flex-col bg-white w-full lg:mr-[4rem] mr-[2rem]"
          style={{
            backgroundColor: colorActive !== '#202020' ? '' : colorActive,
          }}
        >
          {nav(t).map((item) => (
            <OneLink item={item} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuBurger;
