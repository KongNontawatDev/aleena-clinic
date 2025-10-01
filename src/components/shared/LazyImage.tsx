import { useState, useRef, useEffect } from 'react';
import { Image, ImageProps, Skeleton } from '@chakra-ui/react';

interface LazyImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  placeholder?: string;
  threshold?: number;
}

export default function LazyImage({ 
  src, 
  alt, 
  placeholder = './image/logo.png',
  threshold = 0.1,
  ...props 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (isInView && !isLoaded) {
      const img = new window.Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        // ถ้าโหลดรูปไม่สำเร็จ ให้ใช้ placeholder
        setImageSrc(placeholder);
        setIsLoaded(true);
      };
      img.src = src;
    }
  }, [isInView, src, placeholder, isLoaded]);

  return (
    <Skeleton isLoaded={isLoaded} fadeDuration={0.3}>
      <Image
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </Skeleton>
  );
}
