import React from 'react';

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Icon */}
      <div className="w-16 h-16 bg-orange-400 flex items-center justify-center rounded-full">
        {icon}
      </div>
      {/* Title */}
      <h3 className="text-green-800 font-bold text-3xl font-sansita">{title}</h3>
      {/* Description */}
      <p className="text-gray-600 font-lato mt-2">
        {description.map((line, index) => (
          <span key={index} className="block">{line}</span>
        ))}
      </p>
    </div>
  );
};

export default InfoCard;
