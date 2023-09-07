/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-case-declarations */
import Header from '@components/header/Header';
import { useEffect, useMemo, useState } from 'react';
import MenuBuger from '@components/menuBurger/MenuBuger';
import { useMediaQuery } from 'react-responsive';
import Lenis from '@studio-freight/lenis';
import {
  ColorModeContext,
  MenuBurgerContext,
  ResponsiveContext,
} from '../utils/context';

interface ILayoutProps {
  children: JSX.Element;
}

function Layout({ children }: ILayoutProps): JSX.Element {
  const isMobileInit = useMediaQuery({ query: '(max-width: 1024px)' });

  const [colorActive, setColorActive] = useState<string>('#B80F6A');
  const [menuBurgerIsOpen, setMenuBurgerIsOpen] = useState<boolean>(false);
  const [selectionColor, setSelectionColor] = useState<string>('pink');
  const [linkActivMenuBurger, setLinkActivMenuBurger] = useState<string>('');

  const [isMobile, setIsMobile] = useState(isMobileInit);

  const colorModeContextValue = useMemo(
    () => ({
      colorActive,
      updateColorActive: setColorActive,
      selectionColor,
      updateSelectionColor: setSelectionColor,
    }),
    [colorActive, selectionColor]
  );

  const responsiveContextValue = useMemo(
    () => ({
      isMobile,
    }),
    [isMobile]
  );

  const menuBurgerContextValue = useMemo(
    () => ({
      menuBurgerIsOpen,
      updateMenuBurgerIsOpen: setMenuBurgerIsOpen,
      linkActivMenuBurger,
      updateLinkActivMenuBurger: setLinkActivMenuBurger,
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

  useEffect(() => {
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    switch (linkActivMenuBurger) {
      case 'ABOUT':
        if (aboutSection) {
          const offset = aboutSection.getBoundingClientRect().top - 15;
          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        }
        break;
      case 'PROJECTS':
        projectsSection?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      case 'CONTACT':
        contactSection?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      default:
    }
  }, [linkActivMenuBurger]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1024);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    const lenis = new Lenis();
    lenis.on('scroll', () => {
      // console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={responsiveContextValue}>
      <MenuBurgerContext.Provider value={menuBurgerContextValue}>
        <ColorModeContext.Provider value={colorModeContextValue}>
          <div
            style={{
              backgroundColor:
                colorActive === '#202020' ? colorActive : '#ffffff',
            }}
            className="max-w-screen relative"
          >
            <Header />
            <MenuBuger />
            <div
              className="transition-all duration-500 "
              style={{ opacity: menuBurgerIsOpen ? 0 : 1 }}
            >
              {children}
            </div>
          </div>
        </ColorModeContext.Provider>
      </MenuBurgerContext.Provider>
    </ResponsiveContext.Provider>
  );
}

export default Layout;
