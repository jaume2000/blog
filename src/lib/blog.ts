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

    // Extraer el título de la primera línea que comienza con '#'
    const lines = fileContents.split('\n');
    const titleLine = lines.find(line => line.trim().startsWith('#'));
    const title = titleLine ? titleLine.replace(/^#+\s*/, '').trim() : slug;

    // El contenido completo sin modificar
    const content = lines.slice(1).join('\n');

    // Crear un extracto (opcional)
    const excerpt = lines.slice(1).join(' ').substring(0, 150) + '...';

    return {
      slug,
      title,
      content,
      excerpt
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

