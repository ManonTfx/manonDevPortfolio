import Contact from '@components/Contact';
import CardsProjectsContainer from '@components/cardsProjects/CardsProjectsContainer';
import { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ButtonLink from '@components/ButtonLink';
import { ColorModeContext } from '@utils/context';
import { projectDatasInitial } from '../utils/initialsValues';
import { scrollToTop } from '../utils/function';
import {
  TechpathDatas,
  drapoDatas,
  drapoSolutionDatas,
  opxDatas,
  remiBlanchetDatas,
  valentineBouvetDatas,
} from '../utils/datas';
import { IProjectDatas } from '../utils/types';

function ProjectDetail() {
  const { project } = useParams();
  const sectionRef = useRef<HTMLDivElement>(null);

  const [projectDatas, setProjectDatas] =
    useState<IProjectDatas>(projectDatasInitial);

  const { colorActive } = useContext(ColorModeContext);

  useEffect(() => {
    scrollToTop();

    switch (project) {
      case 'OPX':
        setProjectDatas(opxDatas);
        break;
      case 'Drapo':
        setProjectDatas(drapoDatas);
        break;
      case 'Drapo Solution':
        setProjectDatas(drapoSolutionDatas);
        break;
      case 'Remi Blanchet':
        setProjectDatas(remiBlanchetDatas);
        break;
      case 'Valentine Bouvet':
        setProjectDatas(valentineBouvetDatas);
        break;
      case 'Techpath':
        setProjectDatas(TechpathDatas);
        break;
      default:
    }
  }, [project]);

  return (
    <div
      className={colorActive !== '#202020' ? 'text-textColor' : 'text-white'}
    >
      <div ref={sectionRef} className="lg:mx-[4rem] mx-[2rem] mt-[10rem]">
        <div>
          <div className="lg:flex lg:space-x-10">
            <div className="lg:w-5/12 w-full">
              <p className="text-[1.5rem]">Client:</p>
              <p className="font-medium text-[5rem] font-oswald ">{project}</p>

              <hr className="mt-5" />
              <p className="mt-8 text-[1.5rem]">Année:</p>
              <p className="font-medium text-[5rem] font-oswald">
                {projectDatas.year}
              </p>
              <hr className="mt-5" />
              <p className="mt-8 text-[1.5rem]">Stacks:</p>
              <div className="lg:flex lg:space-x-5 mb-[6rem]">
                {projectDatas.stacks.map((stack) => (
                  <div className="w-fit rounded-default p-2 px-5 border mt-5 text-[1.5em]">
                    {stack}
                  </div>
                ))}
              </div>
            </div>
            <img
              className="lg:w-8/12 rounded-default"
              src={projectDatas.mockup}
              alt={project}
            />
          </div>
          <div className="my-[10rem] lg:w-8/12">
            <p className="lg:text-[2rem] text-[1.5rem] mb-[4rem]">
              {' '}
              {projectDatas.description}
            </p>
            {projectDatas.subDescription !== null && (
              <div className="lg:text-[2rem] text-[1.5rem] mb-[4rem]">
                {projectDatas.subDescription}
              </div>
            )}
            <ButtonLink
              link={projectDatas.link}
              titleButton="ACCEDER AU SITE"
            />
          </div>

          {projectDatas.images !== null && (
            <div
              style={{ backgroundColor: colorActive }}
              className="lg:flex mt-5 justify-between items-center lg:py-8 px-8 pb-8 py-4 rounded-default"
            >
              {projectDatas.images.map((image) => (
                <img
                  className="rounded-default lg:mt-0 mt-[2rem]"
                  src={image}
                  alt=""
                />
              ))}
            </div>
          )}

          {projectDatas.videos !== null && projectDatas.videos.length > 1 && (
            <div className="lg:flex lg:space-x-2 w-full ">
              {projectDatas.videos.map((video) => (
                <video
                  className="rounded-default lg:w-1/2 lg:mt-0 mt-[2rem]"
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src={video} type="video/mp4" />
                  <track kind="captions" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              ))}
            </div>
          )}
          {projectDatas.videos !== null && projectDatas.videos.length === 1 && (
            <video
              className="rounded-default w-1/2"
              controls
              autoPlay
              loop
              muted
            >
              <source src={projectDatas.videos[0]} type="video/mp4" />
              <track kind="captions" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          )}
        </div>
      </div>
      <div className="mt-[10rem]">
        <CardsProjectsContainer />
      </div>
      <Contact />
    </div>
  );
}

export default ProjectDetail;
