import React from 'react';

const SectionTitle = ({ heading1, heading2, description , isHeading2 }) => {
  return (
    <section className=" py-12 ">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-orange-500 uppercase tracking-wide font-bold text-sm mt-4 font-lato">{heading1}</h1>
        <h2 className={`font-bold text-4xl md:text-5xl leading-tight mt-4 font-sansita ${isHeading2 ? "text-green-800" : "text-white"}`}>{heading2}</h2>
        {description && (
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            {description.map((line, index) => (
              <span key={index} className="block">{line}</span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
};

export default SectionTitle;
