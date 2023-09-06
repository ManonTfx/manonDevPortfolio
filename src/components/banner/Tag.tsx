/* eslint-disable no-nested-ternary */
import { ColorModeContext } from '@utils/context';
import { useContext } from 'react';

interface ITagProps {
  text: string;
  border: boolean;
}

function Tag({ text, border }: ITagProps) {
  const { colorActive } = useContext(ColorModeContext);
  return (
    <div
      style={{
        color: colorActive !== '#202020' ? '#413B3B' : '#ffffff',
        border:
          colorActive !== '#202020' && border
            ? '1px solid #202020'
            : colorActive === '#202020' && border
            ? '1px solid #fff'
            : 'none',
      }}
      className="font-oswald font-bold tracking-tighter text-[3rem] flex items-center space-x-2 rounded-full border border-2 px-10 mr-2"
    >
      <span>#</span> {text}
    </div>
  );
}

export default Tag;
