import fs from 'fs';
import path from 'path';
import { getPostBySlug, type BlogPost } from '@/lib/blog';

const FOLDER = 'learning_recs';
const LOCALE = 'en';

export function getRoadmapSlugs(): string[] {
  const dir = path.join(process.cwd(), 'public', FOLDER, LOCALE);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
    .sort();
}

export function getRoadmap(slug: string): BlogPost | null {
  return getPostBySlug(slug, LOCALE, FOLDER);
}

export function getRoadmaps(): BlogPost[] {
  return getRoadmapSlugs()
    .map((slug) => getRoadmap(slug))
    .filter((roadmap): roadmap is BlogPost => roadmap !== null);
}
