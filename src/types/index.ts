export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  instructor: Instructor;
  department: Department;
  outcomes: string[];
  syllabus: Module[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  prerequisites: string[];
  startDates: string[];
  thumbnail: string;
  rating: number;
  studentsEnrolled: number;
}

export interface Module {
  title: string;
  duration: string;
  topics: string[];
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  expertise: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  courses?: Course[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Instructor;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}
