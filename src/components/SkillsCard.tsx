import { useContext } from 'react';
import { ColorModeContext } from '../context';

interface ISkillsCardProps {
  titleSkill: string;
  skills: string[];
}

function SkillsCard({ titleSkill, skills }: ISkillsCardProps): JSX.Element {
  const { selectionColor } = useContext(ColorModeContext);
  return (
    <div>
      <div className="flex space-x-3 items-center">
        <p
          className={`lg:text-[2rem] font-medium selection_color_${selectionColor}`}
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

export default SkillsCard;
