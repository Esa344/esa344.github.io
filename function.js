const stylink = (linkFile, mediaQueries = '') => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = linkFile;
  
  if (mediaQueries === 'mobile') {
    link.media = '(max-width: 767px)';
  } else if (mediaQueries === 'tablet') {
    link.media = '(min-width: 768px) and (max-width: 1023px)';
  } else if (mediaQueries === 'desktop') {
    link.media = '(min-width: 1024px)';
  } else {
    link.media = mediaQueries;
  }

  document.head.appendChild(link);
};

export default stylink