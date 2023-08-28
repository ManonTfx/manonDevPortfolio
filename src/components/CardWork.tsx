import { useContext } from 'react';
import { ColorModeContext } from '../context';

interface IWork {
  id: number;
  companyName: string;
  stacks: string[];
  img: string;
  description: string;
}

interface ICardWorkProps {
  work: IWork;
}

function CardWork({ work }: ICardWorkProps): JSX.Element {
  const { colorActive, selectionColor } = useContext(ColorModeContext);

  return (
    <div
      style={{
        top: `0rem`,
      }}
      className="bg-white h-full sticky rounded-[16px]"
    >
      <div
        style={{
          borderColor: colorActive,
          height: 'calc(100% - 10rem)',
        }}
        className="card border border-2 rounded-[16px] px-[6rem] mt-10 flex flex-col justify-between pb-[2rem]"
      >
        <div className="lg:flex justify-between">
          <div>
            <p
              className={`font-medium text-[5rem] selection_color_background_${selectionColor}`}
            >
              {work.companyName}
            </p>
            <div className="flex flex-col justify-between h-[80%]">
              <div className="flex flex-col lg:space-y-2">
                {work.stacks.map((stack) => (
                  <div className="border border-black p-2 px-4 rounded-[16px] w-fit	 ">
                    {stack}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img
            className="lg:w-8/12 lg:h-[50vh] mt-6 object-fit"
            src={`${process.env.PUBLIC_URL}/assets/img/${work.img}`}
            alt={work.companyName}
          />
        </div>
        <div>
          <div className="w-9/12">{work.description}</div>
          <button
            className="btn-see-more mt-4 flex items-center rounded-[16px] border border-black py-3 px-2"
            type="button"
          >
            <p> En savoir plus</p>
            <div
              style={{ backgroundColor: colorActive }}
              className="py-3 px-2  rounded-full ml-2 hover:ml-4 transition-all"
            >
              <img
                className="w-[1.2rem]"
                src={`${process.env.PUBLIC_URL}/assets/img/see_more.svg`}
                alt={work.companyName}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardWork;
