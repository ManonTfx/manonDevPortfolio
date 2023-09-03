import { useContext, useEffect, useRef, useState } from 'react';
import { ColorModeContext, ResponsiveContext } from '@utils/context';
import Hello from './Hello';
import Presentation from './Presentation';
import Skills from './Skills';

function About(): JSX.Element {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);

  const { colorActive } = useContext(ColorModeContext);
  const { isMobile } = useContext(ResponsiveContext);

  const [margin, setMargin] = useState(4);

  const handleWindowScroll = () => {
    if (aboutSectionRef.current) {
      const container = aboutSectionRef.current.getBoundingClientRect();
      if (container.top <= 250 && container.top >= -1000) {
        if (container.top <= 250 && container.top >= 100) {
          setMargin(3);
        } else if (container.top <= 250 && container.top >= 150) {
          setMargin(2);
        } else {
          setMargin(0);
        }
      } else {
        setMargin(4);
      }
    }
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('scroll', handleWindowScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      setMargin(2);
    } else {
      setMargin(4);
    }
  }, [isMobile]);

  return (
    <div
      ref={aboutSectionRef}
      style={{
        backgroundColor: colorActive !== '#202020' ? colorActive : '#000000',
        marginLeft: `${margin}rem`,
        marginRight: `${margin}rem`,
        borderRadius: margin === 0 ? '0px' : '16px',
      }}
      className="text-white lg:px-[8rem] px-[2rem] py-[4rem] mt-[17rem] rounded-default transition-all duration-500"
    >
      <div
        className={[
          'transition-all duration-500',
          margin === 0 ? 'mx-[4rem]' : 'm-0',
        ].join(' ')}
      >
        <Hello />
        <Presentation skillsSectionRef={skillsSectionRef} />
        <div ref={skillsSectionRef} />
        <Skills />
      </div>
    </div>
  );
}

export default About;
