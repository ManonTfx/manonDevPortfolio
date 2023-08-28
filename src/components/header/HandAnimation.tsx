import { useEffect, useState } from 'react';

function HandAnimation() {
  const svgArray = [
    '/assets/img/hand_one.svg',
    '/assets/img/hand_two.svg',
    '/assets/img/hand_three.svg',
    '/assets/img/hand_four.svg',
    '/assets/img/hand_five.svg',
    '/assets/img/hand_six.svg',
    '/assets/img/hand_seven.svg',
    '/assets/img/hand_height.svg',
    '/assets/img/hand_seven.svg',
    '/assets/img/hand_six.svg',
    '/assets/img/hand_five.svg',
    '/assets/img/hand_four.svg',
    '/assets/img/hand_three.svg',
    '/assets/img/hand_two.svg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img
        style={{ height: '2rem' }}
        src={process.env.PUBLIC_URL + svgArray[currentImageIndex]}
        alt=""
      />
    </div>
  );
}

export default HandAnimation;
