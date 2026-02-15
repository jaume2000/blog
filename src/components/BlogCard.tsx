import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  lang: 'en' | 'es';
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, slug, lang }) => {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 h-full flex flex-col">
      <h2 className="text-lg font-bold mb-3 line-clamp-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow line-clamp-3">{excerpt}</p>
      <Link 
        href={`/blog/${lang}/${slug}`} 
        className="text-blue-600 dark:text-blue-400 hover:underline mt-auto font-medium"
      >
        {lang === 'es' ? 'Leer más →' : 'Read more →'}
      </Link>
    </div>
  );
};

export default BlogCard;