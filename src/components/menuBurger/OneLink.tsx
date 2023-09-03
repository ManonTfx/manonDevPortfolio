import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowDownRight } from '@assets/imageComponent';
import { ColorModeContext, MenuBurgerContext } from '@utils/context';

function OneLink({ item }: { item: string }) {
  const [hoverLink, setHoverLink] = useState(false);

  const router = useNavigate();
  const location = useLocation();

  const { updateMenuBurgerIsOpen, updateLinkActivMenuBurger } =
    useContext(MenuBurgerContext);
  const { colorActive } = useContext(ColorModeContext);

  const handleLearnMoreClick = (name: string) => {
    updateMenuBurgerIsOpen(false);
    switch (name) {
      case 'HOME':
        router('/');
        updateLinkActivMenuBurger('');
        break;
      case 'ABOUT':
        if (location.pathname.includes('project')) {
          router('/');
        }
        updateLinkActivMenuBurger('ABOUT');
        break;
      case 'PROJECTS':
        updateLinkActivMenuBurger('PROJECTS');
        break;
      case 'CONTACT':
        updateLinkActivMenuBurger('CONTACT');
        break;
      default:
    }
  };

  return (
    <button
      onMouseLeave={() => setHoverLink(false)}
      onMouseEnter={() => setHoverLink(true)}
      style={{
        color: colorActive !== '#202020' ? '#413B3B' : '#ffffff',
      }}
      type="button"
      onClick={() => {
        handleLearnMoreClick(item);
      }}
      className="font-normal w-full lg:text-[7rem] text-[3rem] border-b pl-5 text-start flex items-center space-x-2 overflow-hidden "
    >
      <ArrowDownRight
        className="transition-all duration-300"
        style={{
          transform: hoverLink ? 'translateX(0rem)' : 'translateX(-5rem)',
        }}
        fill={colorActive !== '#202020' ? '#413B3B' : '#ffffff'}
      />
      <p
        className="transition-all duration-300"
        style={{
          transform: hoverLink ? 'translateX(3rem)' : 'translateX(-3rem)',
        }}
      >
        {item}
      </p>
    </button>
  );
}

export default OneLink;
