const scrollToBottom = () => {
  const pageHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  document.documentElement.scrollTop = pageHeight - windowHeight - 1100;

  return new Promise((resolve) => {
    window.scrollTo({
      top: pageHeight - windowHeight,
      behavior: 'smooth',
    });
    setTimeout(resolve, 1000);
  });
};

const scrollToTop = () => {
  document.documentElement.scrollTop = 1100;

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export { scrollToBottom, scrollToTop };
