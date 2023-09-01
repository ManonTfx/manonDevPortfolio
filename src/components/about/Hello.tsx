import { useContext } from 'react';
import { ColorModeContext } from '../../context';

function Hello() {
  const { selectionColor } = useContext(ColorModeContext);

  return (
    <div className="lg:w-11/12">
      <span
        className={`text-[2.2rem] absolute rounded-default px-4 border border-1 whiteselection_color_${selectionColor}`}
      >
        Hello !
      </span>
      <div
        className={`font-medium pb-[7rem] text-[2.2rem] padding_first_line selection_color_${selectionColor}`}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Développeuse
        web front-end et basée à Marseille. Je suis prête à enrichir votre
        équipe de ma créativité et de mon expertise technique. Découvrez mon
        univers et mes réalisations en explorant mon portfolio.
      </div>
    </div>
  );
}

export default Hello;
