import { X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/posts', label: '文章' },
  { href: '/tags', label: '标签' },
  { href: '/archive', label: '归档' },
  { href: '/about', label: '关于' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex md:hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-paper dark:bg-paper-dark shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-ink-gray-2 dark:border-ink-gray-2-dark">
          <span className="font-serif-zh font-bold text-ink dark:text-ink-light">菜单</span>
          <button onClick={onClose} className="p-2 rounded hover:bg-ink-gray-1 dark:hover:bg-ink-gray-1-dark">
            <X className="w-5 h-5 text-ink dark:text-ink-light" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={onClose} className="block px-4 py-3 text-ink dark:text-ink-light hover:text-cinnabar dark:hover:text-cinnabar-light hover:bg-ink-gray-1 dark:hover:bg-ink-gray-1-dark rounded-md transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t border-ink-gray-2 dark:border-ink-gray-2-dark">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
