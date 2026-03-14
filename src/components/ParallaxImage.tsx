import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from './Navbar';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function ParallaxImage({ src, alt, className, containerClassName }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} className={cn('relative overflow-hidden', containerClassName)}>
      <motion.img
        style={{ y, scale }}
        src={src}
        alt={alt}
        className={cn('absolute inset-0 w-full h-full object-cover will-change-transform', className)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
