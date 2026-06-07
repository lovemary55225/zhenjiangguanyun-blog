import { Calendar } from 'lucide-react';
import { formatDate } from '@/utils/formatDate';
import Tag from '@/components/ui/Tag';
import type { CollectionEntry } from 'astro:content';

interface PostCardProps {
  post: CollectionEntry<'posts'>;
}

export default function PostCard({ post }: PostCardProps) {
  const { title, description, pubDate, tags, cover } = post.data;
  return (
    <article className="bg-paper dark:bg-paper-dark border border-ink-gray-2 dark:border-ink-gray-2-dark rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-cinnabar/30 dark:hover:border-cinnabar-light/30 group">
      <a href={`/posts/${post.slug}`} className="block">
        {cover && (
          <div className="aspect-[16/9] overflow-hidden">
            <img src={cover} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-ink-gray-3 mb-3">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(pubDate)}</span>
          </div>
          <h2 className="font-serif-zh text-xl font-bold text-ink dark:text-ink-light mb-2 group-hover:text-cinnabar transition-colors">{title}</h2>
          <p className="text-ink-gray-3 text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => <Tag key={tag} name={tag} href={`/tags/${tag}`} size="sm" />)}
            </div>
          )}
        </div>
      </a>
    </article>
  );
}
