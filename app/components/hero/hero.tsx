// components/Hero.tsx
import Image from 'next/image';
import hero_image from './Images/hero-image.png'
import Mybutton from '../button/button';

const Hero = () => {
  return (
    <section className="bg-orange-50 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center ">
        <div className="text-center md:text-left md:w-1/2 space-y-4 ml-28">
          <h1 className="text-orange-500 uppercase tracking-wide font-bold text-sm">Savory Wheels</h1>
          <h2 className="text-green-800 font-bold text-4xl md:text-6xl leading-tight font-serif ">
            Zeal Taste: <br></br>Culinary Delights<br></br> on Wheels
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Bringing Gourmet Street Food to Your Neighborhood – Fresh, Flavorful, and Fast!
          </p>
          <Mybutton label="Book your table"/>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative rounded-lg overflow-hidden mx-auto ">
            <Image
              src={hero_image} // Replace with your image path
              alt="Food Truck"
              width={400}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
