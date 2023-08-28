import { useContext } from 'react';
import { ColorModeContext } from '../context';
import SkillsCard from './SkillsCard';

interface IAboutProps {
  scrollPercentage: number;
}

function About({ scrollPercentage }: IAboutProps): JSX.Element {
  const { colorActive, selectionColor } = useContext(ColorModeContext);

  const minWidth = 90;
  const maxWidth = 100;

  const width = minWidth + (maxWidth - minWidth) * (scrollPercentage / 100);

  const skills = [
    {
      title: 'Technologies',
      skillsArray: [
        'React',
        'Javascript / Typescript',
        'HTML / CSS',
        'NextJS',
        'TailwindCSS',
        'Storybook',
        'NodeJs',
        'Prisma',
        'GraphQL',
        'PostgreSQL',
      ],
    },
    {
      title: 'Design',
      skillsArray: ['UI Design', 'UX Design', 'Prototypage'],
    },
    {
      title: 'Outils',
      skillsArray: [
        'Figma',
        'VSCode',
        'Postman',
        'Github',
        'Gitlab',
        'Slack',
        'Trello',
        'Notion',
      ],
    },
    {
      title: 'Personnelles',
      skillsArray: ['Curieuse', 'Autonome', 'Créative', 'organisée'],
    },
  ];

  return (
    <div
      id="container-first-section"
      style={{
        backgroundColor: colorActive,
        width: `${width}%`,
      }}
      className="text-white px-[6rem] py-[4rem] mt-[17rem] m-auto "
    >
      <div className="m-auto">
        <div className="lg:w-11/12 relative">
          <span
            className={`text-[1.5rem] absolute rounded-[16px] px-4 py-1 border border-whiteselection_color_${selectionColor}`}
          >
            Hello !
          </span>
          <div
            className={`font-medium pt-3 pb-[7rem] text-[2rem] padding_first_line selection_color_${selectionColor}`}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Développeuse
            web front-end et basée à Marseille, je maîtrise React et JavaScript
            à la perfection. Je suis prête à enrichir votre équipe de ma
            créativité et de mon expertise technique. Découvrez mon univers et
            mes réalisations en explorant mon portfolio.
          </div>
        </div>
        <div className="lg:flex lg:space-x-20 items-center justify-center lg:mt-[10rem]">
          <img
            className="h-[40rem] lg:m-0 m-auto rounded-[16px]"
            src={`${process.env.PUBLIC_URL}/assets/img/manon.jpg`}
            alt=""
          />
          <div className="lg:w-2/6 flex flex-col lg:space-y-[2rem] space-y-[2rem] text-[1.5rem] font-extralight mt-10 lg:mt-0">
            <div className={`selection_color_${selectionColor}`}>
              Passionnée d&apos;informatique, de jeux vidéo et d&apos;univers
              numériques,j&apos;ai plongé tête la première dans le développement
              front-end, en me spécialisant en React / TypeScript. Toujours
              curieuse, je suis à l&apos;affût des défis web les plus fous et
              des nouvelles tendances
            </div>
            <div className={`selection_color_${selectionColor}`}>
              En parallèle j&apos;ai développé une passion pour le design et le
              maquettage. Créer des interfaces esthétiques est devenu un
              objectif qui me motive au quotidien. J&apos;aime explorer
              l&apos;intersection entre le développement et le design pour
              donner vie à des expériences en ligne captivantes et mémorables.
            </div>
            <div className={`selection_color_${selectionColor}`}>
              De plus, j&apos;ai également acquis des compétences dans la
              création de sites vitrines et e-commerce sur WordPress et Shopify.
            </div>
          </div>
        </div>
        <div className="h-[0.1px] bg-white mt-[5rem] lg:w-10/12 m-auto" />
        <p
          className={`font-light mt-6 text-[1.2rem lg:w-10/12 m-auto selection_white selection_color_${selectionColor}`}
        >
          COMPETENCES
        </p>
        <div className="flex justify-between lg:w-10/12 mt-6 m-auto">
          {skills.map((skill) => (
            <SkillsCard
              key={skill.title}
              titleSkill={skill.title}
              skills={skill.skillsArray}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
