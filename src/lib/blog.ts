import fs from 'fs';
import path from 'path';
import { publishedSlugs } from '@/content/blog';

export type BlogLocale = 'en' | 'es';

export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
}

function getDirectory(locale: BlogLocale, folder = 'blog'): string {
  return path.join(process.cwd(), 'public', folder, locale);
}

export function getBlogPosts(locale: BlogLocale = 'en'): BlogPost[] {
  const dir = getDirectory(locale, 'blog');
  if (!fs.existsSync(dir)) return [];

  const fileNames = fs.readdirSync(dir);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => getPostBySlug(fileName.replace(/\.md$/, ''), locale));

  return allPostsData.filter((post): post is BlogPost => post !== null);
}

export function getPublishedPosts(): BlogPost[] {
  const all = getBlogPosts('en');
  const allow = new Set(publishedSlugs);
  return all.filter((post) => allow.has(post.slug));
}

export function getPostBySlug(
  slug: string,
  locale: BlogLocale = 'en',
  folder: string = 'blog',
): BlogPost | null {
  try {
    const fullPath = path.join(getDirectory(locale, folder), `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const lines = fileContents.split('\n');
    const titleLine = lines.find((line) => line.trim().startsWith('#'));
    const title = titleLine ? titleLine.replace(/^#+\s*/, '').trim() : slug;

    const content = lines.slice(1).join('\n');
    const excerptRaw = lines.slice(1).join(' ').replace(/\s+/g, ' ').trim();
    const excerpt = excerptRaw.length > 120 ? excerptRaw.substring(0, 120) + '...' : excerptRaw;

    return {
      slug,
      title,
      content,
      excerpt,
    };
  } catch {
    return null;
  }
}
