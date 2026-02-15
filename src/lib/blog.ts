import fs from 'fs';
import path from 'path';

export type BlogLocale = 'en' | 'es';

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
}

function getBlogDirectory(locale: BlogLocale): string {
  return path.join(process.cwd(), 'public', 'blog', locale);
}

export function getBlogPosts(locale: BlogLocale): BlogPost[] {
  const dir = getBlogDirectory(locale);
  if (!fs.existsSync(dir)) return [];

  const fileNames = fs.readdirSync(dir);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => getBlogPostBySlug(fileName.replace(/\.md$/, ''), locale));

  return allPostsData.filter((post): post is BlogPost => post !== null);
}

export function getBlogPostBySlug(slug: string, locale: BlogLocale): BlogPost | null {
  try {
    const fullPath = path.join(getBlogDirectory(locale), `${slug}.md`);
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
  } catch (error) {
    console.error(`Error reading blog post ${locale}/${slug}:`, error);
    return null;
  }
}
