import React from 'react';

type OptimizedImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

const rasterRegex = /\.(png|jpe?g)$/i;

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  loading = 'lazy',
  decoding = 'async',
  className,
  ...rest
}) => {
  const webpSrc = rasterRegex.test(src) ? src.replace(rasterRegex, '.webp') : null;

  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        {...rest}
      />
    </picture>
  );
};

export default OptimizedImage;
