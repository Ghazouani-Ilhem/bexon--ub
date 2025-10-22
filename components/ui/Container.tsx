'use client';

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  delay?: number;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  delay = 0,
}) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const containerClasses = `mx-auto px-4 ${sizeClasses[size]} ${className}`;

  return (
    <div 
      className={containerClasses}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Container;