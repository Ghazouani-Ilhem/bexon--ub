'use client';

import React from 'react';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  delay?: number;
}

const Grid: React.FC<GridProps> = ({
  children,
  className = '',
  cols = 3,
  gap = 'md',
  delay = 0,
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  const gridClasses = `grid ${colsClasses[cols]} ${gapClasses[gap]} ${className}`;

  return (
    <div
      className={gridClasses}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Grid;