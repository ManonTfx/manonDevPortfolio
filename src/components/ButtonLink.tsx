/* eslint-disable no-nested-ternary */
import { ArrowDownRight } from '@assets/imageComponent';
import { ColorModeContext } from '@utils/context';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

interface IButtonLink {
  link: string;
  titleButton: string;
}

function ButtonLink({ link, titleButton }: IButtonLink): JSX.Element {
  const [hoverSeeMoreButton, setHoverSeeMoreButton] = useState(false);
  const { colorActive } = useContext(ColorModeContext);

  const insideLinkJsx = () => {
    return (
      <>
        <div
          style={{
            backgroundColor:
              colorActive !== '#202020' ? colorActive : '#B80F6A',
            zIndex: 0,
            left: hoverSeeMoreButton ? '0rem' : '100%',
          }}
          className="absolute h-full w-full transition-all duration-300"
        />
        <p
          style={{
            color: hoverSeeMoreButton ? 'white' : '',
          }}
          className="z-10 transition-all duration-300"
        >
          {titleButton}
        </p>
        <div
          style={{
            backgroundColor: hoverSeeMoreButton
              ? 'white'
              : colorActive === '#202020' && !hoverSeeMoreButton
              ? '#B80F6A'
              : colorActive,
          }}
          className="h-10 w-10 z-10 rounded-full ml-2 flex justify-center transition-all duration-300"
        >
          <ArrowDownRight
            width="1rem"
            fill={hoverSeeMoreButton ? colorActive : 'white'}
            className="m-auto z-10"
          />
        </div>
      </>
    );
  };

  return link.includes('project') ? (
    <Link
      style={{
        border:
          colorActive !== '#202020'
            ? `1px solid ${hoverSeeMoreButton ? colorActive : 'black'} `
            : '1px solid #B80F6A',
      }}
      onMouseLeave={() => setHoverSeeMoreButton(false)}
      onMouseEnter={() => setHoverSeeMoreButton(true)}
      className="relative overflow-hidden mt-4 flex items-center rounded-default py-3 px-5 transition-all duration-300 w-fit"
      to={link}
      rel="noreferrer"
    >
      {insideLinkJsx()}
    </Link>
  ) : (
    <a
      style={{
        border:
          colorActive !== '#202020'
            ? `1px solid ${hoverSeeMoreButton ? colorActive : 'black'} `
            : '1px solid #B80F6A',
      }}
      onMouseLeave={() => setHoverSeeMoreButton(false)}
      onMouseEnter={() => setHoverSeeMoreButton(true)}
      className="relative overflow-hidden mt-4 flex items-center rounded-default py-3 px-5 transition-all duration-300 w-fit"
      href={link}
      target={!link.includes('project') ? '_blank' : '_self'}
      rel="noreferrer"
    >
      {insideLinkJsx()}
    </a>
  );
}

export default ButtonLink;
