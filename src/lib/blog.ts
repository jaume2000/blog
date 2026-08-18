import fs from 'fs';
import path from 'path';

export type BlogLocale = 'en' | 'es';
export type LearningNotesLocale = 'en'

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
}

type LearningNotePost = BlogPost

function getDirectory(locale: BlogLocale, folder='blog'): string {
  return path.join(process.cwd(), 'public', folder, locale);
}

export function getBlogPosts(locale: BlogLocale): BlogPost[] {
  const dir = getDirectory(locale, 'blog');
  if (!fs.existsSync(dir)) return [];

  const fileNames = fs.readdirSync(dir);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => getPostBySlug(fileName.replace(/\.md$/, ''), locale));

  return allPostsData.filter((post): post is BlogPost => post !== null);
}

function getLearningNoteDirectory(locale: LearningNotesLocale): string {
  return path.join(process.cwd(), 'public', 'learning_recs', locale);
}

export function getLearningNotesPosts(locale: LearningNotesLocale): LearningNotePost[] {
  const dir = getLearningNoteDirectory(locale);
  console.log(dir)
  if (!fs.existsSync(dir)) return [];

  const fileNames = fs.readdirSync(dir);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => getPostBySlug(fileName.replace(/\.md$/, ''), locale, 'learning_recs'));

  return allPostsData.filter((post): post is LearningNotePost => post !== null);
}

export function getPostBySlug(slug: string, locale: BlogLocale, folder:string= 'blog'): BlogPost | null {
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
  } catch (error) {
    console.error(`Error reading blog post ${locale}/${slug}:`, error);
    return null;
  }
}
