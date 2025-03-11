import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Blog post not found</h1>
          <Link to="/blog" className="mt-4 text-indigo-600 hover:text-indigo-800">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow-md mb-6 sm:mb-8"
        />

        <div className="flex items-center mb-6 sm:mb-8">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
              src={post.author.image}
              alt={post.author.name}
            />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">
              {post.author.name}
            </p>
            <div className="flex space-x-2 text-sm text-gray-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 sm:px-3 py-0.5 rounded-full text-xs sm:text-sm font-medium bg-indigo-100 text-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-sm sm:prose prose-indigo max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <Link 
            to="/blog" 
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            ← Back to blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
