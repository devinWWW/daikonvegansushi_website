import React, { useEffect, useRef, useState } from 'react';

type LazySectionProps = {
  children: React.ReactNode;
  placeholderHeight?: number;
  rootMargin?: string;
};

const LazySection: React.FC<LazySectionProps> = ({
  children,
  placeholderHeight = 400,
  rootMargin = '200px 0px',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;
    const target = containerRef.current;

    if (!target) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { rootMargin }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, rootMargin]);

  return (
    <div ref={containerRef}>
      {isVisible ? (
        children
      ) : (
        <div style={{ minHeight: placeholderHeight }} aria-hidden="true" />
      )}
    </div>
  );
};

export default LazySection;
