/* eslint-disable no-nested-ternary */
import { useContext, useEffect, useRef, useState } from 'react';
import { ColorModeContext, ResponsiveContext } from '../utils/context';

function Contact() {
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
        <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p
            className={`font-medium font-oswald text-center lg:text-[5rem] text-[2rem] tracking-tighter selection_color_${selectionColor}`}
          >
            Intéréssé par mon profil ?
          </p>
          <p
            className={`mt-3 lg:text-[1.5rem] selection_color_${selectionColor}`}
          >
            Envoyez moi un email:
          </p>
          <p
            className={`font-extralight lg:text-[1.5rem]  mt-3 selection_color_${selectionColor}`}
          >
            manon.trefoux@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
