interface TagProps {
  name: string;
  href?: string;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function Tag({ name, href, count, size = 'sm' }: TagProps) {
  const sizeStyles = { sm: 'px-2 py-0.5 text-xs', md: 'px-3 py-1 text-sm', lg: 'px-4 py-2 text-base' };
  const content = (
    <span className={`inline-flex items-center rounded-full border border-ink-gray-2 dark:border-ink-gray-2-dark text-ink dark:text-ink-light hover:border-cinnabar hover:text-cinnabar dark:hover:border-cinnabar-light dark:hover:text-cinnabar-light transition-colors ${sizeStyles[size]}`}>
      {name}
      {count !== undefined && <span className="ml-1 text-ink-gray-3">({count})</span>}
    </span>
  );
  if (href) return <a href={href}>{content}</a>;
  return content;
}
