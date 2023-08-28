import { useContext } from 'react';
import { ColorModeContext } from '../context';

function Title() {
  const { colorActive, selectionColor } = useContext(ColorModeContext);

  return (
    <div className="px-[6rem] mt-[10rem] font-bold text-[5rem] relative">
      <h1
        className={`selection_color_background_${selectionColor}`}
        style={{ color: colorActive === '#0E0000' ? '#FFFFFF' : '#202020' }}
      >
        Développeuse Front-end /{' '}
      </h1>
      <h2
        className={`selection_color_background_${selectionColor}`}
        style={{
          color: colorActive !== '#0E0000' ? colorActive : '#B80F6A',
        }}
      >
        Créatrice de site web
      </h2>
    </div>
  );
}

export default Title;
