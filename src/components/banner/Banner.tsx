/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { bannerWords } from '../../utils/datas';
import InfiniteLoopBanner from './InfiniteLoopBanner';
import Tag from './Tag';

function Banner() {
  const [hover, setHover] = useState(false);
  const [duration, setDuration] = useState(20000);

  const TAGS = bannerWords;
  const ROWS = 2;
  const TAGS_PER_ROW = 14;

  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr: any) => [...arr].sort(() => 0.5 - Math.random());

  useEffect(() => {
    if (hover) {
      setDuration(40000);
    } else {
      setDuration(20000);
    }
  }, [hover]);

  return (
    <div className="lg:relative my-[5rem]" style={{ zIndex: 3 }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-full flex flex-col space-y-[1rem] relative p-2 overflow-hidden"
      >
        {[...new Array(ROWS)].map((_, index) => (
          <InfiniteLoopBanner
            key={index}
            duration={random(duration - 5000, duration + 5000)}
            reverse={index % 2}
          >
            {shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map((tag) => (
                <Tag
                  text={tag.title}
                  key={tag.id}
                  border={tag.id === 1 || tag.id === 6 || tag.id === 10}
                />
              ))}
          </InfiniteLoopBanner>
        ))}
      </div>
    </div>
  );
}

export default Banner;
