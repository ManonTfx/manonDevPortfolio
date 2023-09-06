import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorModeContext, ResponsiveContext } from '@utils/context';
import LanguageSwitcher from './LanguageSwitcher';
import ButtonChangeColor from './ButtonChangeColor';
import HandAnimation from './HandAnimation';
import ButtonMenuHamburger from './ButtonMenuHamburger';

function Header() {
  const { colorActive, selectionColor } = useContext(ColorModeContext);
  const { isMobile } = useContext(ResponsiveContext);

  return (
    <div
      id="header"
      className="lg:px-[4rem] px-[2rem] py-5 flex items-center justify-between tranition-all duration-500"
    >
      <Link to="/" className="flex space-x-1 items-end hover">
        <HandAnimation />
        <p
          className={`font-medium text-[1.2rem] selection_color_background_${selectionColor}`}
          style={{
            color: colorActive === '#202020' ? '#ffffff' : '#202020',
          }}
        >
          manon
        </p>
        <p
          className={`font-medium text-[1.2rem] selection_color_background_${selectionColor}`}
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
        <LanguageSwitcher />
        {!isMobile && <ButtonChangeColor />}
        <ButtonMenuHamburger />
      </div>
    </div>
  );
}

export default Header;
