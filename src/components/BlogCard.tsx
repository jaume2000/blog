import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, slug }) => {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 mb-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
      <Link 
        href={`/blog/${slug}`} 
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Read more →
      </Link>
    </div>
  );
};

export default BlogCard;
