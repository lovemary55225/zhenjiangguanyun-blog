import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL, SITE_BASE, AUTHOR_NAME } from '@/consts';

interface SEOMeta {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  publishedAt?: Date;
  updatedAt?: Date;
  tags?: string[];
}

export function generateSEOMeta({ title, description, image, type = 'website', publishedAt, updatedAt, tags }: SEOMeta) {
  const fullTitle = title === SITE_TITLE ? title : `${title} | ${SITE_TITLE}`;
  const desc = description || SITE_DESCRIPTION;
  const ogImage = image || `${SITE_URL}${SITE_BASE}/images/og-default.jpg`;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      type,
      image: ogImage,
      url: SITE_URL,
      site_name: SITE_TITLE,
      ...(publishedAt && { publishedTime: publishedAt.toISOString() }),
      ...(updatedAt && { modifiedTime: updatedAt.toISOString() }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: fullTitle,
      description: desc,
      image: ogImage,
    },
    author: AUTHOR_NAME,
  };
}
