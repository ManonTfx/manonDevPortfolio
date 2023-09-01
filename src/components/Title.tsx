import { useContext } from 'react';
import { ColorModeContext } from '../context';

function Title() {
  const { colorActive, selectionColor } = useContext(ColorModeContext);

  return (
    <div className="px-[4rem] mt-[10rem] font-bold text-[6rem] relative text-textColor font-oswald ">
      <h1
        style={{
          color: colorActive !== '#202020' ? '#413B3B' : '#FFFFFF',
        }}
        className={`selection_color_background_${selectionColor}`}
      >
        Développeuse Front-end /{' '}
      </h1>
      <h2
        className={`selection_color_background_${selectionColor}`}
        style={{
          color: colorActive !== '#202020' ? colorActive : '#B80F6A',
        }}
      >
        Créatrice de site web
      </h2>
    </div>
  );
}

export default Title;
