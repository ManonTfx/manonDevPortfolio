/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import { ColorModeContext } from '@utils/context';
import { useTranslation } from 'react-i18next';

function Hello() {
  const { t } = useTranslation();

  const { selectionColor } = useContext(ColorModeContext);

  return (
    <div className={`lg:w-11/12 selection_color_background_${selectionColor}`}>
      <span
        className={`lg:text-[2.2rem] text-[1.5rem] absolute rounded-default px-4 border border-1 selection_color_background_${selectionColor}`}
      >
        Hello !
      </span>
      <div
        className={`font-medium pb-[7rem] lg:text-[2.2rem] text-[1.5rem] padding_first_line selection_color_${selectionColor}`}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {t('hello_text')}
      </div>
    </div>
  );
}

export default Hello;
