import { projectsCardsData } from '@utils/datas';
import OneCardProject from './OneCardProject';

function CardsProjectsContainer(): JSX.Element {
  return (
    <div
      style={{ height: 'calc(100vh * 6)' }}
      id="projects"
      className="lg:h-screen mt-[5rem] lg:relative"
    >
      {projectsCardsData.map((project) => (
        <OneCardProject key={project.id} project={project} />
      ))}
    </div>
  );
}

export default CardsProjectsContainer;
