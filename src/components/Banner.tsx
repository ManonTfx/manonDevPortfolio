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
  return (
    <div className="bannerContainer">
      <div className="banner">
        {bannerWords.map((word) => (
          <span
            className="font-bold text-[15rem] tracking-tighter"
            key={word.id + word.title}
            style={{ margin: '0 50px' }}
          >
            {word.title}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Banner;
