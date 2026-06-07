import { useState, useEffect, useCallback, useRef } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import SearchResult from './SearchResult';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PFResult {
  url: string;
  meta: { title: string };
  excerpt: string;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PFResult[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const performSearch = useCallback(async (q: string) => {
    if (!q.trim()) { setResults([]); return; }
    setLoading(true);
    try {
      const pf = await import('/pagefind/pagefind.js');
      const search = await pf.search(q);
      const items = await Promise.all(search.results.slice(0, 10).map((r: any) => r.data()));
      setResults(items);
    } catch (e) {
      console.error('Search error:', e);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => performSearch(query), 300);
    return () => clearTimeout(timer);
  }, [query, performSearch]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-paper dark:bg-paper-dark rounded-xl shadow-2xl border border-ink-gray-2 dark:border-ink-gray-2-dark overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-ink-gray-2 dark:border-ink-gray-2-dark">
          {loading ? <Loader2 className="w-5 h-5 text-ink-gray-3 animate-spin" /> : <Search className="w-5 h-5 text-ink-gray-3" />}
          <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索文章..." className="flex-1 bg-transparent text-ink dark:text-ink-light placeholder-ink-gray-3 outline-none text-base" />
          <button onClick={onClose} className="p-1 rounded hover:bg-ink-gray-1 dark:hover:bg-ink-gray-1-dark transition-colors"><X className="w-5 h-5 text-ink-gray-3" /></button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-4">
          <SearchResult results={results.map((r) => ({ url: r.url, title: r.meta.title, excerpt: r.excerpt }))} query={query} />
        </div>
        <div className="px-4 py-2 border-t border-ink-gray-2 dark:border-ink-gray-2-dark text-xs text-ink-gray-3">按 ESC 关闭</div>
      </div>
    </div>
  );
}
