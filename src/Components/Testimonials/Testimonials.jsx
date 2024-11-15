// src/pages/TestimonialPage.js
import React from 'react';
import profile1 from '../../assets/lappy.png';
import profile2 from '../../assets/canon.png';
import profile3 from '../../assets/game.png';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "This platform has transformed my shopping experience! Highly recommended.",
    image: profile1,
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Incredible selection of products and very user-friendly interface. Love it!",
    image: profile2,
  },
  {
    id: 3,
    name: "Alex Johnson",
    feedback: "Excellent customer service and fast shipping. Will shop again!",
    image: profile3,
  },
];

const TestimonialPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-green-200 dark:from-gray-800 dark:to-gray-900 py-16 px-4 flex items-center justify-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">What Our Customers Say</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-200 dark:border-gray-700"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{testimonial.name}</h2>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
