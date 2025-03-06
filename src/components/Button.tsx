import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none uppercase tracking-wider';
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark text-white',
    secondary: 'bg-secondary hover:bg-secondary-light text-white',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;