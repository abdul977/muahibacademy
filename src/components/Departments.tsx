import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Megaphone, TrendingUp, Coins } from 'lucide-react';
import { departments } from '../data/courses';

const iconMap = {
  ShoppingBag,
  Megaphone,
  TrendingUp,
  Coins
};

const Departments = () => {
  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Departments
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-500">
            Choose from our specialized departments and start your journey to success
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept) => {
            const Icon = iconMap[dept.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-indigo-100 rounded-lg text-indigo-600 mb-3 sm:mb-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-sm sm:text-base text-gray-500">{dept.description}</p>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="mt-3 sm:mt-4 inline-flex items-center text-sm sm:text-base text-indigo-600 hover:text-indigo-500 group"
                  >
                    Learn more
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Departments;
