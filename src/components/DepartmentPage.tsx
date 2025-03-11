import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star, CheckCircle } from 'lucide-react';
import { departments } from '../data/courses';

const DepartmentPage = () => {
  const { id } = useParams();
  const department = departments.find(dept => dept.id === id);

  if (!department) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {department.name}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl">
            {department.description}
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {department.courses?.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="text-white font-semibold text-sm">{course.level}</div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-indigo-600" />
                      <span className="ml-2 text-sm text-gray-500">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-indigo-600" />
                      <span className="ml-2 text-sm text-gray-500">{course.studentsEnrolled} students</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-indigo-600" />
                      <span className="ml-2 text-sm text-gray-500">{course.rating} rating</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-indigo-600" />
                      <span className="ml-2 text-sm text-gray-500">{course.level}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-indigo-600">{course.price}</span>
                    <a
                      href={`/courses/${course.id}`}
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Department Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of practical experience.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Projects</h3>
              <p className="text-gray-600">Apply your knowledge through hands-on projects and real-world scenarios.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Recognition</h3>
              <p className="text-gray-600">Earn certificates that are valued by employers and industry partners.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
