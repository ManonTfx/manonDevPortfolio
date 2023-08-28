import { useEffect, useRef, useState } from 'react';
import CardWork from '@components/CardWork';
import Title from '@components/Title';
import About from '@components/About';
import Banner from '@components/Banner';
import Contact from '@components/Contact';
import works from '../data/works.json';

function Homepage() {
  const worksCardsContainerRef = useRef<HTMLDivElement>(null);
  const contactContainerRef = useRef<HTMLDivElement>(null);

  const scrollingDownRef = useRef<boolean>(false);
  const coolDownRef = useRef(false);

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const handleContainerWheel = (event: WheelEvent) => {
    if (worksCardsContainerRef.current) {
      const container = worksCardsContainerRef.current;

      // Détecter la direction du scroll
      scrollingDownRef.current = event.deltaY > 0;

      // Si le bas du conteneur est atteint et on scroll vers le bas
      if (
        scrollingDownRef.current &&
        container.scrollTop + container.clientHeight >=
          container.scrollHeight - 1
      ) {
        container.style.overflowY = 'hidden';
        document.body.style.overflow = 'scroll';
      }
      // Si le haut du conteneur est atteint et on scroll vers le haut
      if (!scrollingDownRef.current && container.scrollTop === 0) {
        container.style.overflowY = 'hidden';
        document.body.style.overflow = 'scroll';
      }
    }
  };

  const handleWindowScroll = () => {
    // component About
    const scrolled = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrolled / scrollHeight) * 250;
    setScrollPercentage(percentage <= 100 ? percentage : 210 - percentage);

    // component contact
    if (contactContainerRef.current) {
      const container = contactContainerRef.current.getBoundingClientRect();
      if (container.top <= 300) {
        setShowContact(true);
      } else {
        setShowContact(false);
      }
    }

    // scroll cards projects
    if (worksCardsContainerRef.current && !coolDownRef.current) {
      const container = worksCardsContainerRef.current;
      const firstCard = container.children[0];
      const firstCardRect = firstCard.getBoundingClientRect();
      const lastCard = container.children[works.length - 1];
      const lastCardRect = lastCard.getBoundingClientRect();

      if (
        firstCardRect.top <= 100 &&
        lastCardRect.bottom > window.innerHeight
      ) {
        container.style.overflowY = 'scroll';
        document.body.style.overflow = 'hidden';

        // Set a cooldown to prevent changes
        coolDownRef.current = true;

        // Calculate the scroll position to center the container
        const offset = (window.innerHeight - container.clientHeight) / 2;
        window.scrollTo({
          top: firstCardRect.top + window.scrollY - offset - 40,
          behavior: 'smooth',
        });

        setTimeout(() => {
          coolDownRef.current = false;
        }, 500);
      } else {
        container.style.overflowY = 'hidden';
        document.body.style.overflow = 'scroll';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    worksCardsContainerRef.current?.addEventListener(
      'wheel',
      handleContainerWheel,
      { passive: true }
    );

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      worksCardsContainerRef.current?.removeEventListener(
        'wheel',
        handleContainerWheel
      );
    };
  }, [worksCardsContainerRef]);

  return (
    <div>
      <Title />
      <div className="relative" style={{ zIndex: 3 }}>
        <About scrollPercentage={scrollPercentage} />
      </div>
      <div
        style={{ zIndex: 3 }}
        id="projects"
        ref={worksCardsContainerRef}
        className="px-20 overflow-hidden h-screen mt-[5rem] relative"
      >
        {works.map((work) => (
          <CardWork key={work.id} work={work} />
        ))}
      </div>
      <div className="relative" style={{ zIndex: 3 }}>
        <Banner />
      </div>
      <div
        ref={contactContainerRef}
        style={{ zIndex: 1 }}
        className="h-screen relative w-full py-6"
      >
        <Contact showContact={showContact} />
      </div>
    </div>
  );
}

export default Homepage;
