/* eslint-disable import/no-extraneous-dependencies */
import { useContext, useEffect, useRef } from 'react';
import { projectsCardsData } from '@utils/datas';
import { ResponsiveContext } from '@utils/context';
import OneCardProject from './OneCardProject';

function CardsProjectsContainer(): JSX.Element {
  const worksCardsContainerRef = useRef<HTMLDivElement>(null);
  const scrollingDownRef = useRef<boolean>(false);
  const coolDownRef = useRef(false);

  const { isMobile } = useContext(ResponsiveContext);

  const handleContainerWheel = (event: WheelEvent) => {
    if (worksCardsContainerRef.current) {
      const container = worksCardsContainerRef.current;
      scrollingDownRef.current = event.deltaY > 0;
      if (
        scrollingDownRef.current &&
        container.scrollTop + container.clientHeight >=
          container.scrollHeight - 1
      ) {
        container.style.overflowY = 'hidden';
        document.body.style.overflow = 'scroll';
      }
      if (!scrollingDownRef.current && container.scrollTop === 0) {
        container.style.overflowY = 'hidden';
        document.body.style.overflow = 'scroll';
      }
    }
  };

  const handleWindowScroll = () => {
    if (
      worksCardsContainerRef.current &&
      !coolDownRef.current &&
      worksCardsContainerRef.current.children[1]
    ) {
      const container = worksCardsContainerRef.current;
      const firstCard = container.children[0];
      const firstCardRect = firstCard.getBoundingClientRect();
      const lastCard = container.children[projectsCardsData.length - 1];
      const lastCardRect = lastCard.getBoundingClientRect();

      if (
        firstCardRect.top <= 150 &&
        lastCardRect.bottom > window.innerHeight
      ) {
        container.style.overflowY = 'scroll';
        document.body.style.overflow = 'hidden';
        // Set a cooldown to prevent changes
        coolDownRef.current = true;

        const offset = (window.innerHeight - container.clientHeight) / 2;
        window.scrollTo({
          top: firstCardRect.top + window.scrollY - offset - 50,
          behavior: 'smooth',
        });

        setTimeout(() => {
          coolDownRef.current = false;
        }, 300);
      } else {
        container.style.overflowY = 'hidden';
        document.body.style.overflow = 'scroll';
      }
    }
  };

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('scroll', handleWindowScroll, { passive: true });

      worksCardsContainerRef.current?.addEventListener(
        'wheel',
        handleContainerWheel,
        { passive: true }
      );
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener('scroll', handleWindowScroll);
        worksCardsContainerRef.current?.removeEventListener(
          'wheel',
          handleContainerWheel
        );
      }
    };
  }, [isMobile]);

  return (
    <div
      style={{ zIndex: 3 }}
      id="projects"
      ref={worksCardsContainerRef}
      className="lg:h-screen mt-[5rem] lg:relative lg:overflow-hidden"
    >
      {projectsCardsData.map((project) => (
        <OneCardProject key={project.id} project={project} />
      ))}
    </div>
  );
}

export default CardsProjectsContainer;
