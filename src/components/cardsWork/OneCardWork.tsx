/* eslint-disable no-nested-ternary */
import { useContext, useState } from 'react';
import { ArrowDownRight } from '../../assets/imageComponent';
import { ColorModeContext } from '../../context';

interface IWork {
  id: number;
  companyName: string;
  stacks: string[];
  img: string;
  description: string;
}

interface IOneCardWorkProps {
  work: IWork;
}

function OneCardWork({ work }: IOneCardWorkProps): JSX.Element {
  const { colorActive, selectionColor } = useContext(ColorModeContext);
  const [hoverSeeMoreButton, setHoverSeeMoreButton] = useState(false);

  return (
    <div
      style={{
        top: `0rem`,
        backgroundColor: colorActive !== '#202020' ? '#ffffff' : '#202020',
        color: colorActive !== '#202020' ? '#413B3B' : '#ffffff',
      }}
      className=" h-full rounded-default mx-[4rem] sticky"
    >
      <div
        style={{
          borderColor: colorActive !== '#202020' ? '#413B3B' : '#B80F6A',
          height: 'calc(100% - 10rem)',
        }}
        className="card border border-2 rounded-default px-[6rem] mt-10 flex flex-col justify-between pb-[2rem]"
      >
        <div className="lg:flex justify-between">
          <div>
            <p
              style={{
                color: colorActive !== '#202020' ? '#413B3B' : '#ffffff',
              }}
              className={`font-medium text-[5rem] font-oswald selection_color_background_${selectionColor}`}
            >
              {work.companyName}
            </p>
            <div className="flex flex-col justify-between h-[80%]">
              <div className="flex flex-col lg:space-y-2">
                {work.stacks.map((stack) => (
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
            </div>
          </div>
          <img
            className="lg:w-8/12 lg:h-[50vh] mt-6 object-fit rounded-default"
            src={work.img}
            alt={work.companyName}
          />
        </div>
        <div>
          <div className="w-9/12">{work.description}</div>
          <button
            style={{
              border:
                colorActive !== '#202020'
                  ? `1px solid ${hoverSeeMoreButton ? colorActive : 'black'} `
                  : '1px solid #B80F6A',
            }}
            onMouseLeave={() => setHoverSeeMoreButton(false)}
            onMouseEnter={() => setHoverSeeMoreButton(true)}
            className="relative overflow-hidden mt-4 flex items-center rounded-default py-3 px-2 transition-all duration-300"
            type="button"
          >
            <div
              style={{
                backgroundColor:
                  colorActive !== '#202020' ? colorActive : '#B80F6A',
                zIndex: 0,
                left: hoverSeeMoreButton ? '0rem' : '100%',
              }}
              className="absolute h-full w-full transition-all duration-300"
            />
            <p
              style={{
                color: hoverSeeMoreButton ? 'white' : '',
              }}
              className="z-10 transition-all duration-300"
            >
              EN SAVOIR PLUS
            </p>
            <div
              style={{
                backgroundColor: hoverSeeMoreButton
                  ? 'white'
                  : colorActive === '#202020' && !hoverSeeMoreButton
                  ? '#B80F6A'
                  : colorActive,
              }}
              className="h-10 w-10 z-10 rounded-full ml-2 flex justify-center transition-all duration-300"
            >
              <ArrowDownRight
                width="1rem"
                fill={hoverSeeMoreButton ? colorActive : 'white'}
                className="m-auto z-10"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OneCardWork;
