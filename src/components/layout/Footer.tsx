import { Rss, Github, Mail } from 'lucide-react';
import { SITE_TITLE, AUTHOR_NAME, GITHUB_USERNAME } from '@/consts';

export default function Footer() {
  return (
    <footer className="border-t border-ink-gray-2 dark:border-ink-gray-2-dark mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif-zh text-lg font-bold text-ink dark:text-ink-light">{SITE_TITLE}</p>
            <p className="text-sm text-ink-gray-3 mt-1">以笔为剑，以文观世</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="p-2 text-ink-gray-3 hover:text-cinnabar transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="/rss.xml" className="p-2 text-ink-gray-3 hover:text-cinnabar transition-colors" aria-label="RSS">
              <Rss className="w-5 h-5" />
            </a>
            <a href="mailto:zhenjiangguanyun@example.com" className="p-2 text-ink-gray-3 hover:text-cinnabar transition-colors" aria-label="邮箱">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-ink-gray-1 dark:border-ink-gray-1-dark text-center">
          <p className="text-sm text-ink-gray-3">© {new Date().getFullYear()} {AUTHOR_NAME}. All rights reserved.</p>
          <p className="text-xs text-ink-gray-3 mt-2">Powered by Astro & React | 新中式水墨风</p>
        </div>
      </div>
    </footer>
  );
}
