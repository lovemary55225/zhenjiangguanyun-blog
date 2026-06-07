import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="flex items-center justify-center gap-2 mt-12">
      {currentPage > 1 && (
        <a href={currentPage === 2 ? baseUrl : `${baseUrl}/page/${currentPage - 1}`} className="p-2 rounded-md text-ink dark:text-ink-light hover:bg-ink-gray-1 dark:hover:bg-ink-gray-1-dark transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </a>
      )}
      {pages.map((page) => (
        <a key={page} href={page === 1 ? baseUrl : `${baseUrl}/page/${page}`}
          className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
            page === currentPage ? 'bg-cinnabar text-white' : 'text-ink dark:text-ink-light hover:bg-ink-gray-1 dark:hover:bg-ink-gray-1-dark'
          }`}
        >
          {page}
        </a>
      ))}
      {currentPage < totalPages && (
        <a href={`${baseUrl}/page/${currentPage + 1}`} className="p-2 rounded-md text-ink dark:text-ink-light hover:bg-ink-gray-1 dark:hover:bg-ink-gray-1-dark transition-colors">
          <ChevronRight className="w-5 h-5" />
        </a>
      )}
    </nav>
  );
}
