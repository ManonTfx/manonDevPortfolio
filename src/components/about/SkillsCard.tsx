import { useContext } from 'react';
import { ColorModeContext } from '@utils/context';

interface IOneSkillProps {
  titleSkill: string;
  skills: string[];
}

function OneSkill({ titleSkill, skills }: IOneSkillProps): JSX.Element {
  const { selectionColor } = useContext(ColorModeContext);

  return (
    <div className="lg:mt-0 mt-[1rem]">
      <div className="flex space-x-3 items-center">
        <p
          className={`lg:text-[2rem] text-[1.5rem] font-medium selection_color_${selectionColor}`}
        >
          {titleSkill}
        </p>
        <div className="rounded-full bg-white h-2 w-2 mt-2" />
      </div>

      {skills.map((skill) => (
        <p
          className={`lg:text-[1rem] text-[.75rem] selection_color_${selectionColor}`}
          key={skill}
        >
          {skill}
        </p>
      ))}
    </div>
  );
}

export default OneSkill;
