/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */

import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ColorModeContext, ResponsiveContext } from '../utils/context';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const { t } = useTranslation();

  const contactContainerRef = useRef<HTMLDivElement>(null);

  const [showContact, setShowContact] = useState(true);

  const { colorActive, selectionColor } = useContext(ColorModeContext);
  const { isMobile } = useContext(ResponsiveContext);

  const handleWindowScroll = () => {
    // component contact
    if (contactContainerRef.current) {
      const container = contactContainerRef.current.getBoundingClientRect();
      if (container.top <= 300) {
        setShowContact(true);
      } else {
        setShowContact(false);
      }
    }
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('scroll', handleWindowScroll, { passive: true });
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener('scroll', handleWindowScroll);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    const textElements: any = document.querySelectorAll(
      '.interested-text-animation'
    );

    textElements.forEach((textElement: any) => {
      const text = new SplitType(textElement, { types: 'chars' });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: textElement,
          start: '-500% center',
          end: 'bottom center',
          scrub: true,
          markers: false,
        },
        scaleY: 0,
        y: -20,
        transformOrigin: 'top',
        stagger: 0.1,
      });
    });
  }, []);

  return (
    <div
      ref={contactContainerRef}
      style={{ zIndex: 1 }}
      id="contact"
      className="h-screen lg:relative w-full py-6"
    >
      <div
        style={{
          backgroundColor: colorActive !== '#202020' ? colorActive : '#000000',
          borderRadius: showContact ? '16px' : '',
          transition: 'all 0.3s ease',
          marginLeft:
            showContact && !isMobile ? '4rem' : isMobile ? '2rem' : '0rem',
          marginRight:
            showContact && !isMobile ? '4rem' : isMobile ? '2rem' : '0rem',
        }}
        className="m-auto h-full relative text-white"
      >
        <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <p
            className={`interested-text-animation font-medium font-oswald text-center lg:text-[6rem] text-[2rem] tracking-tighter selection_color_${selectionColor}`}
          >
            {t('contact_interessed')}
          </p>
          <p
            className={`mt-3 lg:text-[1.5rem] selection_color_${selectionColor} `}
          >
            {t('send_me_an_email')}
          </p>
          <a
            href="mailto:manon.trefoux@gmail.com"
            className={`font-extralight lg:text-[1.5rem]  mt-3 selection_color_${selectionColor} `}
          >
            manon.trefoux@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
