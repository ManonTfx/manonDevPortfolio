/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { projectsCardsData } from '@utils/datas';
import { useEffect, useRef } from 'react';
import OneCardProject from './OneCardProject';

function CardsProjectsContainer(): JSX.Element {
  const refs: React.RefObject<HTMLDivElement>[] = projectsCardsData.map(() =>
    useRef<HTMLDivElement>(null)
  );

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      refs.forEach((ref, index) => {
        if (!ref.current || index === 0) return;

        const bounds = ref.current.getBoundingClientRect();
        if (bounds.top < windowHeight / 2) {
          refs[index - 1].current!.style.width = '70%';
          refs[index - 1].current!.style.margin = 'auto';
        } else {
          refs[index - 1].current!.style.width = '95%';
          refs[index - 1].current!.style.margin = 'auto';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [refs]);
  return (
    <div
      style={{ height: 'calc(100vh * 6)' }}
      id="projects"
      className="lg:h-screen mt-[5rem] lg:relative"
    >
      {projectsCardsData.map((project, index) => (
        <OneCardProject
          key={project.id}
          project={project}
          refs={refs}
          index={index}
        />
      ))}
    </div>
  );
}

export default CardsProjectsContainer;
