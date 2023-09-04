/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import { ColorModeContext } from '@utils/context';
import { useTranslation } from 'react-i18next';
import { skills } from '@utils/datas';
import OneSkill from './SkillsCard';

function Skills() {
  const { t } = useTranslation();
  const { selectionColor } = useContext(ColorModeContext);

  return (
    <div>
      <div className="h-[0.1px] bg-white m-auto mt-[6rem]" />
      <p
        className={`font-light mt-2 text-[1.2rem] m-auto selection_white selection_color_${selectionColor}`}
      >
        {t('skills')}
      </p>
      <div className="lg:flex justify-between lg:mt-6 m-auto">
        {skills(t).map((skill) => (
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
