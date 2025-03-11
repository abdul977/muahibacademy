import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Award, Calendar, Star, BookOpen, CheckCircle } from 'lucide-react';
import { Course } from '../types';
import EnrollmentModal from './EnrollmentModal';

interface CourseDetailProps {
  course: Course;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="object-cover object-center w-full h-full"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-indigo-600" />
                <span className="ml-2 text-sm text-gray-500">{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-indigo-600" />
                <span className="ml-2 text-sm text-gray-500">{course.studentsEnrolled} students</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-indigo-600" />
                <span className="ml-2 text-sm text-gray-500">{course.level}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-indigo-600" />
                <span className="ml-2 text-sm text-gray-500">{course.rating} rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 lg:mt-0"
          >
            <h1 className="text-3xl font-extrabold text-gray-900">{course.title}</h1>
            <div className="mt-3">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {course.department.name}
              </span>
            </div>
            <p className="mt-6 text-gray-500">{course.description}</p>

            <div className="mt-8">
              <div className="flex items-center">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{course.instructor.name}</h3>
                  <p className="text-sm text-gray-500">{course.instructor.title}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">What you'll learn</h2>
              <div className="mt-4 grid grid-cols-1 gap-4">
                {course.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Course Syllabus</h2>
              <div className="mt-4 space-y-4">
                {course.syllabus.map((module, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{module.title}</h3>
                      <span className="text-sm text-gray-500">{module.duration}</span>
                    </div>
                    <ul className="mt-2 space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-gray-600">
                          <BookOpen className="h-4 w-4 text-indigo-600 mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Start Dates</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {course.startDates.map((date, index) => (
                  <div key={index} className="flex items-center">
                    <Calendar className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-600">
                      {new Date(date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enroll Now - {course.price}
              </button>
            </div>

            <EnrollmentModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              course={course}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
