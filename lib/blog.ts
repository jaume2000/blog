import fs from 'fs';
import path from 'path';

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
}

const blogDirectory = path.join(process.cwd(), 'public', 'blog');

export function getBlogPosts(): BlogPost[] {
  // Get all markdown files from the blog directory
  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
        return getBlogPostBySlug(fileName.replace(/\.md$/, ''));
    });
  
  // Sort posts by date
  return allPostsData.filter(post => post !== null)
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse basic metadata from content
    const lines = fileContents.split('\n').filter(line => line.trim() !== '');
    const title = (lines[0] || slug).replace(/#/g, '').trim(); // Remove markdown header syntax
    const excerpt = lines.slice(1, 3).join(' ').substring(0, 150) + '...';
    const content_without_title = lines.slice(1).join('\n'); // Remove title line from content
    
    return {
      slug,
      title,
      content: content_without_title,
      excerpt
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}
