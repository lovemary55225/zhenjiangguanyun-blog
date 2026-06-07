import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface TOCProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TOCProps) {
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex items-center gap-2 px-4 py-2 text-sm text-ink dark:text-ink-light bg-ink-gray-1 dark:bg-ink-gray-1-dark rounded-md mb-4">
        <List className="w-4 h-4" />目录
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="md:sticky md:top-24">
          <h3 className="font-serif-zh font-bold text-ink dark:text-ink-light mb-4 text-lg">目录</h3>
          <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
            {headings.map((h) => (
              <a key={h.slug} href={`#${h.slug}`} onClick={() => setIsOpen(false)}
                className={`block text-sm py-1.5 pr-2 border-l-2 transition-colors ${
                  activeId === h.slug
                    ? 'border-cinnabar text-cinnabar dark:text-cinnabar-light font-medium'
                    : 'border-ink-gray-2 dark:border-ink-gray-2-dark text-ink-gray-3 hover:text-ink dark:hover:text-ink-light hover:border-ink-gray-3'
                } ${h.depth === 3 ? 'pl-4' : 'pl-2'}`}
              >
                {h.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
