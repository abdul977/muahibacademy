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
      },
      {
        id: 'fin102',
        title: 'Advanced Financial Analysis',
        description: 'Deep dive into financial analysis techniques, valuation methods, and advanced investment strategies for professional portfolio management.',
        duration: '10 weeks',
        price: "45,000 naira",
        instructor: instructors[3],
        department: { id: 'finance', name: 'Finance & Investment', description: '', icon: 'Coins' },
        outcomes: [
          'Perform advanced financial analysis',
          'Value companies and assets',
          'Develop investment strategies',
          'Manage complex portfolios',
          'Navigate global markets'
        ],
        level: 'Advanced',
        prerequisites: ['Basic investment knowledge', 'Understanding of financial markets'],
        startDates: ['2024-05-01', '2024-07-15', '2024-09-01'],
        thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        studentsEnrolled: 420,
        syllabus: [
          {
            title: 'Advanced Analysis Techniques',
            duration: '3 weeks',
            topics: ['Financial modeling', 'Valuation methods', 'Risk assessment']
          },
          {
            title: 'Global Markets',
            duration: '3 weeks',
            topics: ['International markets', 'Currency markets', 'Global economics']
          },
          {
            title: 'Portfolio Strategies',
            duration: '2 weeks',
            topics: ['Advanced portfolio theory', 'Alternative investments', 'Hedging strategies']
          },
          {
            title: 'Professional Practice',
            duration: '2 weeks',
            topics: ['Portfolio management', 'Client management', 'Professional ethics']
          }
        ]
      }
    ]
  },
  {
    id: 'business',
    name: 'Business Strategy',
    description: 'Develop strategic thinking, business management skills, and leadership capabilities. Learn how to create and implement effective business strategies that drive growth and success.',
    icon: 'TrendingUp',
    courses: [
      {
        id: 'bs101',
        title: 'Strategic Business Management',
        description: 'Learn to develop and implement effective business strategies. Master strategic planning, competitive analysis, and organizational leadership.',
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
      },
      {
        id: 'bs102',
        title: 'Business Innovation & Growth',
        description: 'Master the art of business innovation and growth strategies. Learn how to identify opportunities, develop new business models, and drive sustainable growth.',
        duration: '8 weeks',
        price: "40,000 naira",
        instructor: instructors[2],
        department: { id: 'business', name: 'Business Strategy', description: '', icon: 'TrendingUp' },
        outcomes: [
          'Identify growth opportunities',
          'Develop innovative business models',
          'Create growth strategies',
          'Manage change effectively',
          'Drive business innovation'
        ],
        level: 'Advanced',
        prerequisites: ['Strategic management experience', 'Business leadership role'],
        startDates: ['2024-06-01', '2024-08-15', '2024-10-01'],
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        studentsEnrolled: 480,
        syllabus: [
          {
            title: 'Innovation Management',
            duration: '2 weeks',
            topics: ['Innovation types', 'Innovation process', 'Creative thinking']
          },
          {
            title: 'Growth Strategy',
            duration: '2 weeks',
            topics: ['Growth models', 'Market expansion', 'Scaling operations']
          },
          {
            title: 'Business Model Innovation',
            duration: '2 weeks',
            topics: ['Business model canvas', 'Value proposition', 'Revenue models']
          },
          {
            title: 'Implementation',
            duration: '2 weeks',
            topics: ['Change management', 'Resource planning', 'Performance tracking']
          }
        ]
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    description: 'Master modern digital marketing strategies and techniques. Learn how to create effective campaigns, optimize for search engines, and drive meaningful engagement across digital channels.',
    icon: 'Megaphone',
    courses: [
      {
        id: 'dm101',
        title: 'Digital Marketing Essentials',
        description: 'Master the fundamentals of digital marketing and grow your online presence. Learn key strategies for SEO, social media, and content marketing.',
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
      },
      {
        id: 'dm102',
        title: 'Advanced Digital Marketing & Analytics',
        description: 'Take your digital marketing skills to the next level with advanced techniques in analytics, automation, and campaign optimization.',
        duration: '10 weeks',
        price: "45,000 naira",
        instructor: instructors[1],
        department: { id: 'marketing', name: 'Digital Marketing', description: '', icon: 'Megaphone' },
        outcomes: [
          'Master marketing analytics',
          'Implement marketing automation',
          'Optimize ad campaigns',
          'Develop advanced strategies',
          'Drive ROI improvement'
        ],
        level: 'Advanced',
        prerequisites: ['Basic digital marketing experience', 'Analytics knowledge'],
        startDates: ['2024-05-15', '2024-07-01', '2024-09-15'],
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        studentsEnrolled: 560,
        syllabus: [
          {
            title: 'Advanced Analytics',
            duration: '3 weeks',
            topics: ['Data analysis', 'Attribution modeling', 'Predictive analytics']
          },
          {
            title: 'Marketing Automation',
            duration: '2 weeks',
            topics: ['Automation tools', 'Workflow design', 'Lead scoring']
          },
          {
            title: 'Advanced PPC',
            duration: '3 weeks',
            topics: ['Advanced targeting', 'Bid strategies', 'Campaign optimization']
          },
          {
            title: 'Strategy & Integration',
            duration: '2 weeks',
            topics: ['Omnichannel strategy', 'Campaign integration', 'Performance optimization']
          }
        ]
      }
    ]
  },
  {
    id: 'cryptocurrency',
    name: 'Cryptocurrency & Blockchain',
    description: 'Dive into the world of digital assets and blockchain technology. Learn about cryptocurrency trading, blockchain development, and decentralized finance.',
    icon: 'Coins',
    courses: [
      {
        id: 'crypto101',
        title: 'Cryptocurrency Trading Fundamentals',
        description: 'Learn the basics of cryptocurrency trading, market analysis, and risk management in the digital asset space.',
        duration: '6 weeks',
        price: "40,000 naira",
        instructor: instructors[3],
        department: { id: 'cryptocurrency', name: 'Cryptocurrency & Blockchain', description: '', icon: 'Coins' },
        outcomes: [
          'Understand cryptocurrency markets',
          'Master trading strategies',
          'Manage trading risks',
          'Analyze market trends',
          'Use trading platforms effectively'
        ],
        level: 'Beginner',
        prerequisites: ['Basic financial knowledge', 'Computer literacy'],
        startDates: ['2024-04-01', '2024-06-01', '2024-08-01'],
        thumbnail: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        studentsEnrolled: 680,
        syllabus: [
          {
            title: 'Crypto Basics',
            duration: '1 week',
            topics: ['Blockchain fundamentals', 'Cryptocurrency types', 'Market structure']
          },
          {
            title: 'Trading Fundamentals',
            duration: '2 weeks',
            topics: ['Technical analysis', 'Trading strategies', 'Risk management']
          },
          {
            title: 'Trading Platforms',
            duration: '2 weeks',
            topics: ['Exchange usage', 'Trading tools', 'Portfolio tracking']
          },
          {
            title: 'Advanced Concepts',
            duration: '1 week',
            topics: ['DeFi basics', 'Market psychology', 'Future trends']
          }
        ]
      },
      {
        id: 'crypto102',
        title: 'Advanced Blockchain & DeFi',
        description: 'Explore advanced concepts in blockchain technology, smart contracts, and decentralized finance (DeFi) applications.',
        duration: '8 weeks',
        price: "50,000 naira",
        instructor: instructors[3],
        department: { id: 'cryptocurrency', name: 'Cryptocurrency & Blockchain', description: '', icon: 'Coins' },
        outcomes: [
          'Understand blockchain architecture',
          'Develop smart contracts',
          'Navigate DeFi protocols',
          'Assess protocol security',
          'Implement DeFi strategies'
        ],
        level: 'Advanced',
        prerequisites: ['Basic cryptocurrency knowledge', 'Programming experience'],
        startDates: ['2024-05-15', '2024-07-15', '2024-09-15'],
        thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        studentsEnrolled: 420,
        syllabus: [
          {
            title: 'Blockchain Deep Dive',
            duration: '2 weeks',
            topics: ['Consensus mechanisms', 'Network architecture', 'Scalability solutions']
          },
          {
            title: 'Smart Contracts',
            duration: '2 weeks',
            topics: ['Solidity basics', 'Contract development', 'Security best practices']
          },
          {
            title: 'DeFi Protocols',
            duration: '2 weeks',
            topics: ['Lending protocols', 'DEXs', 'Yield farming']
          },
          {
            title: 'Advanced DeFi',
            duration: '2 weeks',
            topics: ['Protocol integration', 'Risk assessment', 'Portfolio strategies']
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

export const featuredCourses = departments.flatMap(dept => dept.courses ?? []).slice(0, 4);
