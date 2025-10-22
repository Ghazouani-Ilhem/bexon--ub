'use client';

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'blue' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  id,
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100',
  };

  const paddingClasses = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24',
  };

  const sectionClasses = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;

  return (
    <section
      id={id}
      className={sectionClasses}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;