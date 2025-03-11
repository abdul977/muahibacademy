import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';
import { departments } from '../data/courses';
import { Course } from '../types';

const featuredCourses = departments
  .flatMap(dept => dept.courses ?? [])
  .filter((course): course is Course => course !== undefined)
  .slice(0, 4);

const FeaturedCourses = () => {
  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Featured Courses
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
            Start your journey with our most popular programs
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2">
          {featuredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{course.title}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {course.department.name}
                  </span>
                </div>
                <p className="mt-4 text-gray-500">{course.description}</p>
                
                <div className="mt-4 sm:mt-6 flex items-center">
                  <img
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                    src={course.instructor.image}
                    alt={course.instructor.name}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{course.instructor.name}</p>
                    <p className="text-sm text-gray-500">{course.instructor.title}</p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 text-indigo-500" />
                    <span className="ml-2 text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <DollarSign className="h-5 w-5 text-indigo-500" />
                    <span className="ml-2 text-sm">{course.price}</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <h4 className="text-sm font-medium text-gray-900">What you'll learn</h4>
                  <ul className="mt-2 space-y-1.5 sm:space-y-2">
                    {course.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 sm:mt-6">
                  <a
                    href={`/courses/${course.id}`}
                    className="block w-full bg-indigo-600 text-center py-2.5 px-4 rounded-md text-sm sm:text-base text-white font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
