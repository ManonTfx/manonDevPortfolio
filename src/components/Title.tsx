/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ColorModeContext } from '../utils/context';

function Title() {
  const { t } = useTranslation();
  const { colorActive, selectionColor } = useContext(ColorModeContext);

  return (
    <div className="px-[4rem]   mt-[10rem] font-bold lg:text-[6rem] text-[3rem] relative text-textColor font-oswald ">
      <h1
        style={{
          color: colorActive !== '#202020' ? '#413B3B' : '#FFFFFF',
        }}
        className={`hover-target selection_color_background_${selectionColor}`}
      >
        {t('title')}
      </h1>
      <h2
        className={`selection_color_background_${selectionColor}`}
        style={{
          color: colorActive !== '#202020' ? colorActive : '#B80F6A',
        }}
      >
        {t('subtitle')}
      </h2>
    </div>
  );
}

export default Title;
