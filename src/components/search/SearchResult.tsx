import { FileText } from 'lucide-react';

interface Item {
  url: string;
  title: string;
  excerpt: string;
}

interface SearchResultProps {
  results: Item[];
  query: string;
}

export default function SearchResult({ results, query }: SearchResultProps) {
  if (!query) return null;
  if (results.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-ink-gray-3">未找到与 "<span className="text-cinnabar">{query}</span>" 相关的文章</p>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <p className="text-sm text-ink-gray-3 mb-4">找到 {results.length} 个结果</p>
      {results.map((result, index) => (
        <a key={index} href={result.url} className="block p-4 rounded-lg bg-ink-gray-1 dark:bg-ink-gray-1-dark hover:bg-ink-gray-2 dark:hover:bg-ink-gray-2-dark transition-colors">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-cinnabar mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-ink dark:text-ink-light mb-1">{result.title}</h4>
              {result.excerpt && <p className="text-sm text-ink-gray-3 line-clamp-2" dangerouslySetInnerHTML={{ __html: result.excerpt }} />}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
