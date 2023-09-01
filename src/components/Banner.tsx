import { useContext } from 'react';
import { ColorModeContext } from '../context';

const bannerWords = [
  { id: 0, title: 'EXPERTISE' },
  { id: 1, title: 'REACT' },
  { id: 2, title: 'JAVASCRIPT' },
  { id: 3, title: 'UX' },
  { id: 4, title: 'MOBILE-FIRST' },
  { id: 5, title: 'COLLABORATION' },
  { id: 6, title: 'ADAPTABILITE' },
  { id: 7, title: 'RESPSONSIVE' },
  { id: 8, title: 'EXPERTISE' },
  { id: 9, title: 'REACT' },
  { id: 10, title: 'JAVASCRIPT' },
  { id: 11, title: 'UX' },
  { id: 12, title: 'MOBILE-FIRST' },
  { id: 13, title: 'COLLABORATION' },
  { id: 14, title: 'ADAPTABILITE' },
  { id: 15, title: 'RESPSONSIVE' },
];

function Banner() {
  const { colorActive } = useContext(ColorModeContext);
  return (
    <div className="relative" style={{ zIndex: 3 }}>
      <div className="bannerContainer">
        <div className="banner">
          {bannerWords.map((word) => (
            <span
              className={[
                'font-bold text-[15rem] tracking-tighter my-2 font-oswald',
                colorActive !== '#202020' ? 'text-textColor' : 'text-white',
              ].join(' ')}
              key={word.id + word.title}
            >
              {word.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
