import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do the online courses work?',
      answer: 'Our courses are delivered through our interactive learning platform. You\'ll have access to video lectures, reading materials, assignments, and live sessions with instructors. You can learn at your own pace while following the course schedule.'
    },
    {
      question: 'What are the payment options?',
      answer: 'We accept all major credit cards, PayPal, and offer flexible payment plans. Some courses also qualify for student financing options. Contact our admissions team for more details.'
    },
    {
      question: 'Are there any prerequisites for the courses?',
      answer: 'Prerequisites vary by course. While some advanced courses may require basic knowledge or prior experience, many of our courses are designed for beginners and require no previous experience.'
    },
    {
      question: 'Do I get a certificate upon completion?',
      answer: 'Yes! Upon successful completion of your course, you\'ll receive a verified digital certificate that you can share with employers or add to your LinkedIn profile.'
    },
    {
      question: 'What kind of support is available?',
      answer: 'We offer comprehensive support including technical assistance, academic guidance, and career counseling. Our instructors hold regular office hours, and our support team is available via email and chat.'
    },
    {
      question: 'Can I access the course materials after completion?',
      answer: 'Yes, you\'ll have lifetime access to all course materials after completion. This includes any updates or new resources added to the course in the future.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-500 text-center"
          >
            Have questions? We're here to help.
          </motion.p>

          <div className="mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-500">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500">
              Still have questions?{' '}
              <a href="/contact" className="text-indigo-600 hover:text-indigo-500">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;