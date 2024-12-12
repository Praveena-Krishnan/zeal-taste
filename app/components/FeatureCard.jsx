import React from "react";
import * as Icons from "react-icons/fa"; 
import {featuresData} from "/Data/FeatureData";

const FeaturesSection = () => {
  return (
    <div className="flex gap-10 justify-around bg-white py-12 px-36">
      {featuresData.map((feature, index) => {
        const Icon = Icons[feature.icon]; 
        return (
          <div key={index} className="flex flex-row text-center items-center gap-3">
          {/* Background Container */}
            <div className="w-16 h-16 bg-orange-500 rounded-full flex justify-center items-center">
             {/* Icon */}
              <Icon size={30} className="text-white" />
            </div>
            <p className="font-semibold text-lg text-green-900">{feature.title}</p>
          </div>

        );
      })}
    </div>
  );
};

export default FeaturesSection;
