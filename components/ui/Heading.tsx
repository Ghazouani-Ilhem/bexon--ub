'use client';

import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  delay?: number;
  align?: 'left' | 'center' | 'right';
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 2,
  className = '',
  delay = 0,
  align = 'left',
}) => {
  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    3: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
    4: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    5: 'text-lg md:text-xl lg:text-2xl font-medium',
    6: 'text-base md:text-lg lg:text-xl font-medium',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const headingClasses = `${sizeClasses[level]} ${alignClasses[align]} ${className}`;

  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <Tag 
      className={headingClasses}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Heading;