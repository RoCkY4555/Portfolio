"use client";

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionScrollWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: string; // e.g., 'delay-200' from Tailwind
  threshold?: number;
};

export function SectionScrollWrapper({ 
  children, 
  className, 
  delay = '',
  threshold = 0.1 
}: SectionScrollWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-1000 ease-in-out',
        delay,
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
}
