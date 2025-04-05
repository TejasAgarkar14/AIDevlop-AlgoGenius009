import React, { useState, useEffect } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      setCurrentSrc(src);
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`lazy-image ${isLoaded ? 'loaded' : ''} ${className || ''}`}
      {...props}
    />
  );
};

export default LazyImage;