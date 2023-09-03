import { useContext } from 'react';
import { ColorModeContext } from '../utils/context';
import { bannerWords } from '../utils/datas';

function Banner() {
  const { colorActive } = useContext(ColorModeContext);
  return (
    <div className="lg:relative" style={{ zIndex: 3 }}>
      <div className="bannerContainer lg:mt-0 mt-5">
        <div className="banner">
          {bannerWords.map((word) => (
            <span
              className={[
                'font-bold lg:text-[15rem] text-[5rem] tracking-tighter ml-20 font-oswald',
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
