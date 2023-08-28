import { useContext } from 'react';
import { ColorModeContext } from '../context';

interface IContactProps {
  showContact: boolean;
}

function Contact({ showContact }: IContactProps) {
  const { colorActive, selectionColor } = useContext(ColorModeContext);

  return (
    <div
      style={{
        backgroundColor: colorActive,
        borderRadius: showContact ? '20px' : '',
        transition: 'all 0.3s ease',
        width: showContact ? '95%' : '100%',
      }}
      className="m-auto h-full relative text-white"
    >
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p
          className={`font-medium font-oswald text-center text-[4rem] tracking-tighter selection_color_${selectionColor}`}
        >
          Intéréssé par mon profil ?
        </p>
        <p className={`mt-3 selection_color_${selectionColor}`}>
          Envoyez moi un email:
        </p>
        <p
          className={`font-extralight  mt-3 selection_color_${selectionColor}`}
        >
          manon.trefoux@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;
