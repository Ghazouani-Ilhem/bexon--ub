'use client';

import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'muted' | 'white';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  delay?: number;
  align?: 'left' | 'center' | 'right';
}

const Text: React.FC<TextProps> = ({
  children,
  className = '',
  size = 'md',
  color = 'primary',
  weight = 'normal',
  delay = 0,
  align = 'left',
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const colorClasses = {
    primary: 'text-gray-900',
    secondary: 'text-gray-700',
    muted: 'text-gray-500',
    white: 'text-white',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const textClasses = `${sizeClasses[size]} ${colorClasses[color]} ${weightClasses[weight]} ${alignClasses[align]} ${className}`;

  return (
    <p 
      className={textClasses}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </p>
  );
};

export default Text;