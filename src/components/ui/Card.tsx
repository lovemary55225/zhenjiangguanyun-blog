import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className = '', href }: CardProps) {
  const base = 'bg-paper dark:bg-paper-dark border border-ink-gray-2 dark:border-ink-gray-2-dark rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-cinnabar/30 dark:hover:border-cinnabar-light/30';
  if (href) return <a href={href} className={`block ${base} ${className}`}>{children}</a>;
  return <div className={`${base} ${className}`}>{children}</div>;
}
