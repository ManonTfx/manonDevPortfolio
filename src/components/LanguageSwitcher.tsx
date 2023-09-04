/* eslint-disable import/no-extraneous-dependencies */
import { france, uk } from '@assets/img/image';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ColorModeContext } from '@utils/context';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const { colorActive } = useContext(ColorModeContext);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      style={{
        color: colorActive === '#202020' ? '#fffff' : '#202020',
        borderColor: colorActive === '#202020' ? '#B80F6A' : colorActive,
      }}
      className="flex items-center space-x-2 border border-1 py-1 px-3 rounded-[8px]"
    >
      <button
        className="h-5 w-8"
        type="button"
        onClick={() => changeLanguage('en')}
      >
        <img className="rounded-[8px] object-fit" src={uk} alt="" />
      </button>
      <button
        className="h-5 w-8"
        type="button"
        onClick={() => changeLanguage('fr')}
      >
        <img className="rounded-[8px] object-fit" src={france} alt="" />
      </button>
    </div>
  );
}

export default LanguageSwitcher;
