import { useContext, useState } from 'react';
import { manon } from '@assets/img/image';
import { ArrowDown } from '@assets/imageComponent';
import { ColorModeContext } from '@utils/context';
import SocialNetwork from './SocialNetwork';

interface IPresentationProps {
  skillsSectionRef: React.RefObject<HTMLDivElement>;
}

function Presentation({ skillsSectionRef }: IPresentationProps): JSX.Element {
  const [hoverSeeMoreButton, setHoverSeeMoreButton] = useState(false);
  const { selectionColor, colorActive } = useContext(ColorModeContext);

  const handleLearnMoreClick = () => {
    if (skillsSectionRef.current) {
      skillsSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div
      id="about"
      className="lg:flex lg:space-x-20 lg:w-full m-auto mt-[5rem] text-black"
    >
      <img
        className="lg:h-[65rem] lg:m-0 m-auto rounded-default"
        src={manon}
        alt=""
      />
      <div className="flex flex-col lg:w-1/2 justify-between text-[1.5rem] lg:pr-16 text-white lg:mt-0 mt-[4rem]">
        <div>
          <div className={`selection_color_${selectionColor}`}>
            Passionnée par l&apos;informatique et le monde numérique, j&apos;ai
            orienté ma carrière vers le développement front-end, en me
            spécialisant dans les technologies JavaScript, TypeScript et React.
            Parallèlement, je possède également des compétences solides en
            WordPress. Ma curiosité naturelle m&apos;amène à chercher
            constamment à améliorer mes compétences et à relever de nouveaux
            défis.
          </div>
          <SocialNetwork />
        </div>
        <div className="w-full">
          <button
            type="button"
            onMouseLeave={() => setHoverSeeMoreButton(false)}
            onMouseEnter={() => setHoverSeeMoreButton(true)}
            onClick={handleLearnMoreClick}
            className="float-right border relative p-[1rem] overflow-hidden rounded-default flex items-center space-x-3 invisible lg:visible"
          >
            <div
              style={{
                zIndex: 0,
                left: hoverSeeMoreButton ? '0rem' : '100%',
                transition: 'all .5s ease',
              }}
              className="absolute bg-white h-full w-full"
            />
            <div
              style={{
                zIndex: 1,
                color: hoverSeeMoreButton ? colorActive : 'white',
              }}
            >
              En savoir plus
            </div>
            <ArrowDown
              className={`z-10 transition ${
                hoverSeeMoreButton ? '' : 'rotate-[-90deg]'
              }`}
              width="1.5rem"
              height="1.5rem"
              fill={hoverSeeMoreButton ? colorActive : 'white'}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
