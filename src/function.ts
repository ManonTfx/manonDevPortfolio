import { Dispatch, SetStateAction } from 'react';

// export const handleMouseMoveShadowEffect = (
//   e: any,
//   colorActive: string,
//   setBoxShadow: Dispatch<SetStateAction<string>>
// ) => {
//   const { clientX, clientY, target } = e;
//   const { left, top, width, height } = target.getBoundingClientRect();
//   const x = clientX - left;
//   const y = clientY - top;

//   const xOffset = (x - width / 2) / width;
//   const yOffset = (y - height / 2) / height;
//   const shadowX = (xOffset * 15).toFixed(1);
//   const shadowY = (yOffset * 15).toFixed(1);
//   const boxShadowValue = `${shadowX}px ${shadowY}px 1px 0px ${
//     colorActive === '#0E0000' ? '#B80F6A' : colorActive
//   }`;

//   setBoxShadow(boxShadowValue);
// };

const MAX_EFFECT_DISTANCE = 12;
const MAX_DEFORMATION = 5;
const SHADOW_STRENGTH = 1.2;

export const handleMouseMoveShadowEffect = (
  e: any,
  colorActive: string,
  setBoxShadow: Dispatch<SetStateAction<string>>,
  setDeformationValue: Dispatch<SetStateAction<number>>
) => {
  const { clientX, target } = e;
  const { left, width } = target.getBoundingClientRect();
  const x = clientX - left;

  const center_x = width / 2;
  const distance = Math.abs(x - center_x);

  if (distance < MAX_EFFECT_DISTANCE) {
    setBoxShadow('none');
  } else {
    const xOffset = (x - center_x) / center_x;
    const deformation = Math.min(MAX_DEFORMATION, xOffset * MAX_DEFORMATION);
    const boxShadowValue = `${deformation * SHADOW_STRENGTH}px ${
      deformation * SHADOW_STRENGTH
    }px 1px 0px ${colorActive === '#0E0000' ? '#B80F6A' : colorActive}`;

    setBoxShadow(boxShadowValue);
  }

  setDeformationValue((x - center_x) / center_x);
};
