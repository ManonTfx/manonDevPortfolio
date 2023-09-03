import { useContext } from 'react';
import { ColorModeContext } from '@utils/context';

function Hello() {
  const { selectionColor } = useContext(ColorModeContext);

  return (
    <div className="lg:w-11/12">
      <span
        className={`lg:text-[2.2rem] text-[1.5rem] absolute rounded-default px-4 border border-1 whiteselection_color_${selectionColor}`}
      >
        Hello !
      </span>
      <div
        className={`font-medium pb-[7rem] lg:text-[2.2rem] text-[1.5rem] padding_first_line selection_color_${selectionColor}`}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Codeuse
        passionnée et créative, basée à Marseille et prête à infuser une dose
        d&apos;innovation et de technicité dans votre équipe ! Je vous invite à
        découvrir mes travaux et mon univers en parcourant mon portfolio..
      </div>
    </div>
  );
}

export default Hello;
