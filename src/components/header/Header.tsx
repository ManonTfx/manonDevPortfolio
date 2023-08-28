/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import ButtonChangeColor from './ButtonChangeColor';
import { ColorModeContext } from '../../context';
import HandAnimation from './HandAnimation';
import ButtonMenuHamburger from './ButtonMenuHamburger';

function Header() {
  const { colorActive } = useContext(ColorModeContext);
  return (
    <div id="header" className="px-[6rem] flex items-center justify-between">
      <div className="flex space-x-1 items-end hover">
        <HandAnimation />
        <p
          className="font-medium text-[1rem]"
          style={{
            color: colorActive === '#0E0000' ? '#ffffff' : '#202020',
          }}
        >
          manon
        </p>
        <p
          className="font-medium text-[1rem]"
          style={{ color: colorActive === '#0E0000' ? '#B80F6A' : colorActive }}
        >
          trefoux
        </p>
        <div
          style={{
            backgroundColor:
              colorActive === '#0E0000' ? '#B80F6A' : colorActive,
          }}
          className="w-2 h-2  rounded mb-1.5"
        />
      </div>
      <div className="flex space-x-5">
        <ButtonChangeColor />
        <ButtonMenuHamburger />
      </div>
    </div>
  );
}

export default Header;
