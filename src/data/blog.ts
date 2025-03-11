import { BlogPost } from '../types';
import { instructors } from './courses';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of E-commerce in Nigeria',
    excerpt: 'Exploring the trends and opportunities in Nigeria\'s growing e-commerce landscape',
    content: `The e-commerce landscape in Nigeria is rapidly evolving, driven by increasing internet penetration and smartphone adoption. This transformation presents unprecedented opportunities for entrepreneurs and established businesses alike.

    Key trends shaping the future of e-commerce in Nigeria include:
    
    1. Mobile-first shopping experiences
    2. Integration of local payment solutions
    3. Last-mile delivery innovations
    4. Social commerce growth
    
    As we look ahead, businesses that adapt to these trends and focus on solving local challenges will be best positioned for success in this dynamic market.`,
    author: instructors[0], // Dr. Chioma Okonkwo
    date: '2024-03-11',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'E-commerce',
    tags: ['e-commerce', 'digital transformation', 'business strategy']
  },
  {
    id: '2',
    title: 'Effective Digital Marketing Strategies for 2024',
    excerpt: 'Learn the latest digital marketing trends and strategies that are working in 2024',
    content: `Digital marketing continues to evolve at a rapid pace. In 2024, successful marketers need to focus on:

    1. AI-driven personalization
    2. Video-first content strategies
    3. Voice search optimization
    4. Social commerce integration
    
    This article explores these trends and provides actionable insights for implementing them in your marketing strategy.`,
    author: instructors[1], // Oluwaseun Adebayo
    date: '2024-03-10',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Digital Marketing',
    tags: ['digital marketing', 'social media', 'content strategy']
  },
  {
    id: '3',
    title: 'Building a Successful Business Strategy',
    excerpt: 'Key components of a robust business strategy in today\'s market',
    content: `A successful business strategy requires careful planning and execution. This article covers:

    1. Market analysis fundamentals
    2. Competitive positioning
    3. Resource allocation
    4. Implementation frameworks
    
    Learn how to develop and execute a strategy that drives sustainable growth for your business.`,
    author: instructors[2], // Aisha Mohammed
    date: '2024-03-09',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Business Strategy',
    tags: ['business strategy', 'planning', 'growth']
  }
];
