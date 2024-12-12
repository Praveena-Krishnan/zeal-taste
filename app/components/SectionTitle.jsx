import React from 'react';

const SectionTitle = ({ heading1, heading2, description , heading2ClassName }) => {
  return (
    <section className=" py-12 ">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-orange-500 uppercase tracking-wide font-bold text-sm mt-4 font-lato">{heading1}</h1>
        <h2 className={`font-bold text-4xl md:text-5xl leading-tight mt-4 font-sansita ${heading2ClassName || "text-green-800"}`}>{heading2}</h2>
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
