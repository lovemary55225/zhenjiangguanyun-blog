import Tag from '@/components/ui/Tag';

interface TagWithCount {
  name: string;
  count: number;
}

interface TagCloudProps {
  tags: TagWithCount[];
}

export default function TagCloud({ tags }: TagCloudProps) {
  if (tags.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-ink-gray-3">暂无标签</p>
      </div>
    );
  }
  const maxCount = Math.max(...tags.map((t) => t.count));
  const minCount = Math.min(...tags.map((t) => t.count));
  const getSize = (count: number): 'sm' | 'md' | 'lg' => {
    if (maxCount === minCount) return 'md';
    const ratio = (count - minCount) / (maxCount - minCount);
    if (ratio > 0.6) return 'lg';
    if (ratio > 0.3) return 'md';
    return 'sm';
  };
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {tags.sort((a, b) => b.count - a.count).map((tag) => (
        <Tag key={tag.name} name={tag.name} count={tag.count} href={`/tags/${tag.name}`} size={getSize(tag.count)} />
      ))}
    </div>
  );
}
