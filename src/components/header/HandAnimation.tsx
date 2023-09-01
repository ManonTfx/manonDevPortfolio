import { useContext, useEffect, useState } from 'react';
import {
  hand_height,
  hand_five,
  hand_four,
  hand_one,
  hand_seven,
  hand_six,
  hand_three,
  hand_two,
  hand_one_dark,
  hand_two_dark,
  hand_three_dark,
  hand_four_dark,
  hand_five_dark,
  hand_six_dark,
  hand_seven_dark,
  hand_height_dark,
} from '@assets/img/image';
import { ColorModeContext } from '../../context';

function HandAnimation() {
  const svgHandArrayInitial = [
    hand_one,
    hand_two,
    hand_three,
    hand_four,
    hand_five,
    hand_six,
    hand_seven,
    hand_height,
    hand_seven,
    hand_six,
    hand_five,
    hand_four,
    hand_three,
    hand_two,
  ];

  const [svgArray, setSvgArray] = useState<string[]>(svgHandArrayInitial);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const { colorActive } = useContext(ColorModeContext);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    let timer: any;
    if (isHovering) {
      timer = setInterval(
        () => {
          setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % svgArray.length
          );
        },
        currentImageIndex === 7 || currentImageIndex === 0 ? 500 : 100
      );
    } else {
      setCurrentImageIndex(0);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isHovering, svgArray, currentImageIndex]);

  useEffect(() => {
    if (colorActive !== '#202020' && svgArray !== svgHandArrayInitial) {
      setSvgArray(svgHandArrayInitial);
    }
    if (colorActive === '#202020') {
      setSvgArray([
        hand_one_dark,
        hand_two_dark,
        hand_three_dark,
        hand_four_dark,
        hand_five_dark,
        hand_six_dark,
        hand_seven_dark,
        hand_height_dark,
        hand_seven_dark,
        hand_six_dark,
        hand_five_dark,
        hand_four_dark,
        hand_three_dark,
        hand_two_dark,
      ]);
    }
  }, [colorActive]);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={svgArray[currentImageIndex]} className="h-[2.5rem]" alt="" />
    </div>
  );
}

export default HandAnimation;
