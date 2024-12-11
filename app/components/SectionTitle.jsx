// SectionTitle Component
import React from 'react';

const SectionTitle = ({ heading1, heading2, description }) => {
  return (
    <section className="bg-teal-50 py-12 ">
      <div className="container mx-auto text-center px-6">
        {/* Heading 1 */}
        <h1 className="text-orange-500 uppercase tracking-wide font-bold text-sm mt-4">{heading1}</h1>
        
        {/* Heading 2 */}
        <h2 className="text-green-800 font-bold text-4xl md:text-5xl leading-tight mt-4">{heading2}</h2>
        
        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          {description.map((line, index) => (
            <span key={index} className="block">{line}</span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default SectionTitle;
