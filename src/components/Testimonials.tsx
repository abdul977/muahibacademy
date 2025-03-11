import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/courses';

const Testimonials = () => {
  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Student Success Stories
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-500">
            Hear from our graduates who have transformed their careers
          </p>
        </div>

        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-base sm:text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm sm:text-base text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
