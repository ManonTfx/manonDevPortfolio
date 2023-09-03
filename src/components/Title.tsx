import { useContext } from 'react';
import { ColorModeContext } from '../utils/context';

function Title() {
  const { colorActive, selectionColor } = useContext(ColorModeContext);

  return (
    <div className="px-[4rem] mt-[10rem] font-bold lg:text-[6rem] text-[3rem] relative text-textColor font-oswald ">
      <h1
        style={{
          color: colorActive !== '#202020' ? '#413B3B' : '#FFFFFF',
        }}
        className={`selection_color_background_${selectionColor}`}
      >
        Développeuse Front-end /
      </h1>
      <h2
        className={`selection_color_background_${selectionColor}`}
        style={{
          color: colorActive !== '#202020' ? colorActive : '#B80F6A',
        }}
      >
        Je donne vie à vos projets web
      </h2>
    </div>
  );
}

export default Title;
