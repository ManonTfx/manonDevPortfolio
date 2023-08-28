import React, { useState, useContext } from 'react';
import { ColorModeContext } from '../../context';

function ButtonChangeColor() {
  const { colorActive, updateColorActive } = useContext(ColorModeContext);
  const [showColors, setShowColors] = useState(false);

  const colors = ['#B80F6A', '#FC9700', '#0FB87B'];

  return (
    <div
      className="overflow-hidden transition-all duration-100 flex items-center border border-1 py-1 rounded-[8px]"
      onMouseEnter={() => setShowColors(true)}
      onMouseLeave={() => setShowColors(false)}
      style={{
        borderColor: colorActive === '#0E0000' ? '#B80F6A' : colorActive,
      }}
    >
      <div className="flex items-center py-1 px-3 rounded-[8px]">
        <p
          style={{
            color: '#202020',
          }}
        >
          COLOR MODE
        </p>
        <div
          className="flex space-x-4 ml-1.5  overflow-hidden transition-all duration-300"
          style={{
            width: showColors ? 'auto' : '0',
            paddingLeft: showColors ? '.5rem' : '0',
          }}
        >
          {colors.map((color) => (
            <button
              onClick={() => updateColorActive(color)}
              type="button"
              key={color}
            >
              <div
                style={{ backgroundColor: color }}
                className=" w-[1rem] h-[1rem] rounded-[100rem]"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ButtonChangeColor;
