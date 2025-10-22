'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'right',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2" aria-hidden="true">{icon}</span>
      )}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="ml-2 btn-icon" aria-hidden="true">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={buttonClasses}
        role="button"
        tabIndex={0}
        aria-disabled={disabled}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      aria-disabled={disabled}
      role="button"
    >
      {buttonContent}
    </button>
  );
};

export default Button;