'use client';

import { useEffect, useRef } from 'react';

interface FadeInContentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FadeInContent: React.FC<FadeInContentProps> = ({
  children,
  className,
  delay = 0,
}) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      nodeRef.current?.setAttribute('data-ready', 'true');
    }, delay);
    return () => window.clearTimeout(timeoutId);
  }, [delay]);

  return (
    <div
      ref={(node) => {
        nodeRef.current = node;
      }}
      className={`opacity-0 translate-y-2 
        data-[ready=true]:opacity-100 data-[ready=true]:translate-y-0 
        will-change-[opacity,transform] 
        motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0
        transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInContent;
