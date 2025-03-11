import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower individuals with cutting-edge digital skills and knowledge needed to thrive in today\'s rapidly evolving business landscape.'
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'A diverse, global network of learners and industry experts committed to sharing knowledge and fostering growth.'
    },
    {
      icon: BookOpen,
      title: 'Our Approach',
      description: 'Practical, hands-on learning experiences combined with expert instruction and real-world applications.'
    },
    {
      icon: Award,
      title: 'Our Impact',
      description: 'Thousands of successful graduates who have transformed their careers and businesses through our programs.'
    }
  ];

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                >
                  <span className="block">About</span>
                  <span className="block text-indigo-600">Muahib Academy</span>
                </motion.h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Founded in 2023, Muahib Academy has been at the forefront of digital education, 
                  helping professionals and entrepreneurs master the skills needed for success in 
                  the digital age.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Team collaboration"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-lg text-indigo-600 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500">
              Muahib Academy was born from a vision to bridge the gap between traditional education 
              and the rapidly evolving digital economy. Our founders recognized that success in 
              today's business landscape requires a unique blend of technical knowledge, practical 
              skills, and strategic thinking.
            </p>
            <p className="text-gray-500 mt-4">
              What started as a small collection of online courses has grown into a comprehensive 
              educational platform, serving students from over 50 countries. Our commitment to 
              excellence, practical learning, and student success has made us a trusted name in 
              digital education.
            </p>
            <p className="text-gray-500 mt-4">
              Today, we continue to expand our course offerings, embrace new technologies, and 
              adapt our teaching methods to ensure our students receive the most relevant and 
              effective education possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;