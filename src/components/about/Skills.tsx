import { useContext } from 'react';
import { ColorModeContext } from '../../context';
import OneSkill from './SkillsCard';

function Skills() {
  const { selectionColor } = useContext(ColorModeContext);

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
    <div>
      <div className="h-[0.1px] bg-white m-auto mt-[6rem]" />
      <p
        className={`font-light mt-2 text-[1.2rem] m-auto selection_white selection_color_${selectionColor}`}
      >
        COMPETENCES
      </p>
      <div className="flex justify-between mt-6 m-auto">
        {skills.map((skill) => (
          <OneSkill
            key={skill.title}
            titleSkill={skill.title}
            skills={skill.skillsArray}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
