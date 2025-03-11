import { Course, Department, Instructor, Testimonial } from '../types';
import { 
  ShoppingBag, 
  Megaphone, 
  TrendingUp, 
  Coins
} from 'lucide-react';

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Dr. Chioma Okonkwo',
    title: 'E-commerce Strategy Expert',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: '15+ years experience in e-commerce and digital transformation',
    expertise: ['E-commerce Strategy', 'Digital Transformation', 'Platform Selection', 'Business Analytics'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/chiomaokonkwo',
      twitter: 'https://twitter.com/drchiomaokonkwo'
    }
  },
  {
    id: '2',
    name: 'Oluwaseun Adebayo',
    title: 'Digital Marketing Specialist',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Former Google Ads strategist with expertise in PPC and SEO',
    expertise: ['SEO', 'PPC Advertising', 'Content Strategy', 'Social Media Marketing'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/oluwaseunadebayo',
      website: 'https://oluwaseunadebayo.com'
    }
  },
  {
    id: '3',
    name: 'Aisha Mohammed',
    title: 'Marketing Strategy Consultant',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Marketing strategist with focus on brand development and market research',
    expertise: ['Brand Strategy', 'Market Research', 'Consumer Behavior', 'Marketing Analytics'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/aishamohammed'
    }
  },
  {
    id: '4',
    name: 'Chidi Okafor',
    title: 'Blockchain Technology Expert',
    image: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Blockchain developer and cryptocurrency trading expert',
    expertise: ['Blockchain Technology', 'Cryptocurrency Trading', 'DeFi', 'Smart Contracts'],
    socialLinks: {
      twitter: 'https://twitter.com/chidiokafor',
      website: 'https://chidiokafor.tech'
    }
  }
];

export const departments: Department[] = [
  {
    id: 'finance',
    name: 'Finance & Investment',
    description: 'Master financial management, investment strategies, and market analysis. Our comprehensive finance courses cover everything from basic investment principles to advanced portfolio management.',
    icon: 'Coins',
    courses: [
      {
        id: 'fin101',
        title: 'Investment Fundamentals',
        description: 'Master the basics of investing and portfolio management. Learn how to analyze financial markets, understand risk management, and make informed investment decisions.',
        duration: '8 weeks',
        price: "35,000 naira",
        instructor: instructors[3],
        department: { id: 'finance', name: 'Finance & Investment', description: '', icon: 'Coins' },
        outcomes: [
          'Understand investment principles',
          'Create diversified portfolios',
          'Analyze financial markets',
          'Manage investment risk',
          'Make informed investment decisions'
        ],
        level: 'Beginner',
        prerequisites: ['Basic math skills', 'Interest in finance'],
        startDates: ['2024-04-01', '2024-06-15', '2024-08-01'],
        thumbnail: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        studentsEnrolled: 1250,
        syllabus: [
          {
            title: 'Introduction to E-commerce',
            duration: '1 week',
            topics: ['E-commerce models', 'Market analysis', 'Platform comparison']
          },
          {
            title: 'Setting Up Your Store',
            duration: '2 weeks',
            topics: ['Store configuration', 'Product listings', 'Payment integration']
          },
          {
            title: 'Operations Management',
            duration: '2 weeks',
            topics: ['Inventory management', 'Order fulfillment', 'Customer service']
          },
          {
            title: 'Growth Strategies',
            duration: '1 week',
            topics: ['Marketing basics', 'Analytics', 'Scaling your business']
          }
        ]
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    description: 'Learn modern digital marketing strategies and techniques',
    icon: 'Megaphone',
    courses: [
      {
        id: 'dm101',
        title: 'Digital Marketing Essentials',
        description: 'Master the fundamentals of digital marketing and grow your online presence',
        duration: '8 weeks',
        price: "35,000 naira",
        instructor: instructors[1],
        department: { id: 'marketing', name: 'Digital Marketing', description: '', icon: 'Megaphone' },
        outcomes: [
          'Create effective digital marketing strategies',
          'Master SEO and content marketing',
          'Run successful social media campaigns',
          'Analyze marketing metrics',
          'Optimize conversion rates'
        ],
        level: 'Beginner',
        prerequisites: ['Basic marketing knowledge', 'Computer proficiency'],
        startDates: ['2024-04-15', '2024-06-01', '2024-07-15'],
        thumbnail: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        studentsEnrolled: 980,
        syllabus: [
          {
            title: 'Digital Marketing Overview',
            duration: '1 week',
            topics: ['Marketing fundamentals', 'Digital channels', 'Strategy basics']
          },
          {
            title: 'Content and SEO',
            duration: '2 weeks',
            topics: ['Content strategy', 'SEO optimization', 'Keyword research']
          },
          {
            title: 'Social Media Marketing',
            duration: '2 weeks',
            topics: ['Platform strategy', 'Content creation', 'Community management']
          },
          {
            title: 'Analytics and Optimization',
            duration: '2 weeks',
            topics: ['Data analysis', 'A/B testing', 'Conversion optimization']
          }
        ]
      }
    ]
  },
  {
    id: 'business',
    name: 'Business Strategy',
    description: 'Develop strategic thinking and business management skills',
    icon: 'TrendingUp',
    courses: [
      {
        id: 'bs101',
        title: 'Strategic Business Management',
        description: 'Learn to develop and implement effective business strategies',
        duration: '10 weeks',
        price: "35,000 naira",
        instructor: instructors[2],
        department: { id: 'business', name: 'Business Strategy', description: '', icon: 'TrendingUp' },
        outcomes: [
          'Develop comprehensive business strategies',
          'Conduct market analysis',
          'Create competitive advantages',
          'Implement strategic initiatives',
          'Measure strategic success'
        ],
        level: 'Intermediate',
        prerequisites: ['Basic business knowledge', 'Some work experience'],
        startDates: ['2024-05-01', '2024-07-01', '2024-09-01'],
        thumbnail: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        studentsEnrolled: 750,
        syllabus: [
          {
            title: 'Strategic Foundations',
            duration: '2 weeks',
            topics: ['Strategic thinking', 'Business analysis', 'Goal setting']
          },
          {
            title: 'Market Analysis',
            duration: '3 weeks',
            topics: ['Market research', 'Competitor analysis', 'Industry trends']
          },
          {
            title: 'Strategy Development',
            duration: '3 weeks',
            topics: ['Strategy formulation', 'Resource allocation', 'Implementation planning']
          },
          {
            title: 'Execution and Control',
            duration: '2 weeks',
            topics: ['Implementation', 'Performance monitoring', 'Strategy adjustment']
          }
        ]
      }
    ]
  },
  {
    id: 'finance',
    name: 'Finance & Investment',
    description: 'Learn financial management and investment strategies',
    icon: 'Coins',
    courses: [
      {
        id: 'fin101',
        title: 'Investment Fundamentals',
        description: 'Master the basics of investing and portfolio management',
        duration: '8 weeks',
        price: "35,000 naira",
        instructor: instructors[3],
        department: { id: 'finance', name: 'Finance & Investment', description: '', icon: 'Coins' },
        outcomes: [
          'Understand investment principles',
          'Create diversified portfolios',
          'Analyze financial markets',
          'Manage investment risk',
          'Make informed investment decisions'
        ],
        level: 'Beginner',
        prerequisites: ['Basic math skills', 'Interest in finance'],
        startDates: ['2024-04-01', '2024-06-15', '2024-08-01'],
        thumbnail: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        studentsEnrolled: 850,
        syllabus: [
          {
            title: 'Investment Basics',
            duration: '2 weeks',
            topics: ['Investment types', 'Risk and return', 'Market basics']
          },
          {
            title: 'Portfolio Management',
            duration: '2 weeks',
            topics: ['Portfolio theory', 'Asset allocation', 'Diversification']
          },
          {
            title: 'Market Analysis',
            duration: '2 weeks',
            topics: ['Technical analysis', 'Fundamental analysis', 'Market indicators']
          },
          {
            title: 'Investment Strategy',
            duration: '2 weeks',
            topics: ['Strategy development', 'Risk management', 'Portfolio rebalancing']
          }
        ]
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Folake Adeleke',
    role: 'E-commerce Entrepreneur',
    content: 'The E-commerce Mastery course transformed my small business. Within months, our online sales increased by 300%.',
    image: 'https://images.unsplash.com/photo-1523450001312-faa4e2e37f7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    name: 'Babajide Ogunlesi',
    role: 'Marketing Manager',
    content: 'The digital marketing program provided practical skills that I immediately applied to my work. The ROI was incredible.',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];

// Continue with more course data in the next part...

export const featuredCourses = departments.flatMap(dept => dept.courses).slice(0, 4);
