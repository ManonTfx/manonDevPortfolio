interface IInfiniteLoopBannerProps {
  children: React.ReactNode;
  duration: any;
  reverse?: boolean | number;
}

function InfiniteLoopBanner({
  children,
  duration,
  reverse,
}: IInfiniteLoopBannerProps) {
  return (
    <div
      className="loop-slider"
      style={
        {
          '--duration': `${duration}ms`,
          '--direction': reverse ? 'reverse' : 'normal',
        } as React.CSSProperties
      }
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
}

export default InfiniteLoopBanner;

InfiniteLoopBanner.defaultProps = {
  reverse: false,
};
