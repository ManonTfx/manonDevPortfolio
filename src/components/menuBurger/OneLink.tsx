import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight } from '@assets/imageComponent';
import { ColorModeContext, MenuBurgerContext } from '../../context';

function OneLink({ item }: { item: string }) {
  const [hoverLink, setHoverLink] = useState(false);

  const { updateMenuBurgerIsOpen } = useContext(MenuBurgerContext);
  const { colorActive } = useContext(ColorModeContext);

  const handleLearnMoreClick = (name: string) => {
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');

    const scrollToBottom = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Forcer le défilement vers le bas en ajustant le scrollTop de <html>
      document.documentElement.scrollTop = pageHeight - windowHeight - 1100;

      return new Promise((resolve) => {
        window.scrollTo({
          top: pageHeight - windowHeight,
          behavior: 'smooth',
        });
        // Attendre la fin du défilement en utilisant setTimeout
        setTimeout(resolve, 1000); // Temps ajustable
      });
    };

    updateMenuBurgerIsOpen(false);

    if (name === 'ABOUT') {
      if (aboutSection) {
        const offset = aboutSection.getBoundingClientRect().top - 15;
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      }
    } else if (name === 'CONTACT') {
      projectsSection?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      const projectsSectionHeight =
        projectsSection?.getBoundingClientRect().height;

      setTimeout(() => {
        projectsSection?.scrollTo({
          top:
            projectsSectionHeight !== undefined ? projectsSectionHeight * 6 : 0,
          behavior: 'smooth',
        });
      }, 1000);
      setTimeout(() => {
        scrollToBottom();
      }, 2000);
    } else {
      projectsSection?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return item === 'HOME' ? (
    <Link
      onMouseLeave={() => setHoverLink(false)}
      onMouseEnter={() => setHoverLink(true)}
      style={{
        color: colorActive !== '#202020' ? '#413B3B' : '#ffffff',
      }}
      onClick={() => updateMenuBurgerIsOpen(false)}
      className="font-normal text-[7rem] border-b pl-5 flex items-center justify-between overflow-hidden"
      to="/"
    >
      <p> HOME</p>
      <ArrowDownRight
        className="transition-all duration-300"
        style={{
          transform: hoverLink ? 'translateX(0rem)' : 'translateX(5rem)',
        }}
        fill={colorActive !== '#202020' ? '#413B3B' : '#ffffff'}
      />
    </Link>
  ) : (
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
      className="font-normal text-[7rem] border-b pl-5 text-start flex items-center justify-between overflow-hidden "
    >
      <p> {item}</p>
      <ArrowDownRight
        className="transition-all duration-300"
        style={{
          transform: hoverLink ? 'translateX(0rem)' : 'translateX(5rem)',
        }}
        fill={colorActive !== '#202020' ? '#413B3B' : '#ffffff'}
      />
    </button>
  );
}

export default OneLink;
