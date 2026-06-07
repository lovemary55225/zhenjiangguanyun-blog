import PostCard from './PostCard';
import type { CollectionEntry } from 'astro:content';

interface PostListProps {
  posts: CollectionEntry<'posts'>[];
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-ink-gray-3 text-lg">暂无文章</p>
      </div>
    );
  }
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => <PostCard key={post.slug} post={post} />)}
    </div>
  );
}
