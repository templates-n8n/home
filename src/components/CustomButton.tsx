
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  disabled?: boolean;
}

const CustomButton = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  rightIcon,
  leftIcon,
  disabled = false,
}: ButtonProps) => {
  const baseStyles = "relative font-medium rounded-lg transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 active:scale-97 shadow-sm hover:shadow",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/5 active:scale-97",
    ghost: "bg-transparent text-primary hover:bg-primary/5 active:scale-97",
  };
  
  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-7 py-3",
  };
  
  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  
  const content = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

export default CustomButton;
