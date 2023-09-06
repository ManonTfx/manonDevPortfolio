import { useContext, useEffect, useState } from 'react';
import { handSvgDarkMode, handSvgLightMode } from '@utils/datas';
import { ColorModeContext } from '@utils/context';

function HandAnimation() {
  const [svgArray, setSvgArray] = useState<string[]>(handSvgLightMode);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const { colorActive, selectionColor } = useContext(ColorModeContext);

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
    if (colorActive !== '#202020' && svgArray !== handSvgLightMode) {
      setSvgArray(handSvgLightMode);
    }
    if (colorActive === '#202020') {
      setSvgArray(handSvgDarkMode);
    }
  }, [colorActive]);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img
        className={`h-[2.5rem] selection_color_background_${selectionColor}`}
        src={svgArray[currentImageIndex]}
        alt=""
      />
    </div>
  );
}

export default HandAnimation;
