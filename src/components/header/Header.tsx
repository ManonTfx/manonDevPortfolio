/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ButtonChangeColor from './ButtonChangeColor';
import { ColorModeContext } from '../../context';
import HandAnimation from './HandAnimation';
import ButtonMenuHamburger from './ButtonMenuHamburger';

function Header() {
  const { colorActive } = useContext(ColorModeContext);
  return (
    <div id="header" className="px-[4rem] flex items-center justify-between">
      <Link to="/" className="flex space-x-1 items-end hover">
        <HandAnimation />
        <p
          className="font-medium text-[1.2rem]"
          style={{
            color: colorActive === '#202020' ? '#ffffff' : '#202020',
          }}
        >
          manon
        </p>
        <p
          className="font-medium text-[1.2rem]"
          style={{
            color: colorActive === '#202020' ? '#B80F6A' : colorActive,
          }}
        >
          trefoux
        </p>
        <div
          style={{
            backgroundColor:
              colorActive === '#202020' ? '#B80F6A' : colorActive,
          }}
          className="w-2 h-2  rounded mb-1.5"
        />
      </Link>
      <div className="flex space-x-5">
        <ButtonChangeColor />
        <ButtonMenuHamburger />
      </div>
    </div>
  );
}

export default Header;
