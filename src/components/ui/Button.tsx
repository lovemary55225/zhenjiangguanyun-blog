import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({ children, href, onClick, variant = 'primary', size = 'md', className = '' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded transition-colors font-medium';
  const variantStyles = {
    primary: 'bg-cinnabar text-white hover:bg-cinnabar-light',
    secondary: 'bg-ink-gray-1 dark:bg-ink-gray-1-dark text-ink dark:text-ink-light hover:bg-ink-gray-2 dark:hover:bg-ink-gray-2-dark',
    ghost: 'text-ink dark:text-ink-light hover:text-cinnabar dark:hover:text-cinnabar-light hover:bg-ink-gray-1 dark:hover:bg-ink-gray-1-dark',
  };
  const sizeStyles = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-base', lg: 'px-6 py-3 text-lg' };
  const combined = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  if (href) return <a href={href} className={combined}>{children}</a>;
  return <button onClick={onClick} className={combined}>{children}</button>;
}
