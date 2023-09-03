import { useContext } from 'react';
import { ColorModeContext } from '@utils/context';
import { IOneProjectCard } from '@utils/types';
import ButtonLink from '@components/ButtonLink';

interface IOneCardProjectProps {
  project: IOneProjectCard;
}

function OneCardProject({ project }: IOneCardProjectProps): JSX.Element {
  const { colorActive, selectionColor } = useContext(ColorModeContext);

  return (
    <div
      style={{
        backgroundColor: colorActive !== '#202020' ? '#ffffff' : '#202020',
        color: colorActive !== '#202020' ? '#413B3B' : '#ffffff',
      }}
      className=" h-full rounded-default lg:mx-[4rem] mx-[2rem] lg:sticky top-0"
    >
      <div
        style={{
          borderColor: colorActive !== '#202020' ? colorActive : '#B80F6A',
          height: 'calc(100% - 10rem)',
        }}
        className="card border border-2 rounded-default lg:px-[6rem] overflow-hidden lg:pr-[0rem] px-[2rem] mt-10 flex flex-col justify-between "
      >
        <div className="lg:flex justify-between h-full">
          <div>
            <p
              style={{
                color: colorActive !== '#202020' ? '#413B3B' : '#ffffff',
              }}
              className={`font-medium text-[5rem] font-oswald selection_color_background_${selectionColor}`}
            >
              {project.companyName}
            </p>
            <div className="flex flex-col justify-between h-[80%]">
              <div className="flex flex-col lg:space-y-2">
                {project.stacks.map((stack) => (
                  <div
                    style={{
                      borderColor:
                        colorActive !== '#202020' ? '#413B3B' : '#B80F6A',
                    }}
                    className="border p-2 px-4 rounded-default w-fit	 "
                  >
                    {stack}
                  </div>
                ))}
              </div>
              <ButtonLink
                link={`/project/${project.companyName}`}
                titleButton="EN SAVOIR PLUS"
              />
            </div>
          </div>
          <div
            style={{
              backgroundColor:
                colorActive !== '#202020' ? colorActive : '#000000',
            }}
            className="lg:px-[2rem] lg:w-8/12 lg:h-full"
          >
            <img
              className="mt-6 lg:mt-[9rem] object-contain rounded-default"
              src={project.img}
              alt={project.companyName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneCardProject;