import { Search, Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

interface HeaderProps {
  onSearchClick: () => void;
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/posts', label: '文章' },
  { href: '/tags', label: '标签' },
  { href: '/archive', label: '归档' },
  { href: '/about', label: '关于' },
];

export default function Header({ onSearchClick, onMenuClick, isMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 dark:bg-paper-dark/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-serif-zh text-xl font-bold text-ink dark:text-ink-light hover:text-cinnabar transition-colors">
            枕剑观云
          </a>
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="px-3 py-2 text-sm text-ink dark:text-ink-light hover:text-cinnabar dark:hover:text-cinnabar-light transition-colors rounded-md">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-1">
            <button onClick={onSearchClick} className="p-2 rounded-md transition-colors hover:bg-ink-gray-1 dark:hover:bg-ink-gray-1-dark" aria-label="搜索">
              <Search className="w-5 h-5 text-ink dark:text-ink-light" />
            </button>
            <div className="hidden md:block"><ThemeToggle /></div>
            <button onClick={onMenuClick} className="md:hidden p-2 rounded-md transition-colors hover:bg-ink-gray-1 dark:hover:bg-ink-gray-1-dark" aria-label="菜单">
              {isMenuOpen ? <X className="w-5 h-5 text-ink dark:text-ink-light" /> : <Menu className="w-5 h-5 text-ink dark:text-ink-light" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
