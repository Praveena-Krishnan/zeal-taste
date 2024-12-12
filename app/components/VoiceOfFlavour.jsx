import Image from "next/image";
import SectionTitle from "../components/SectionTitle" 

const VoicesOfFlavor = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        {/* Section Title */}
        <SectionTitle heading1="About Us" heading2="Voices of Flavor" />

        
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image */}
          <div className="relative max-w-md w-full h-auto">
            <Image
              src="/images/voices.png" 
              alt="Customer Testimonial"
              className="rounded-tl-[100px] object-cover"
              width={400}
              height={500}
            />
          </div>

          {/* Text */}
          <div className="max-w-lg text-left">
            <p className="text-orange-500 text-8xl font-bold mb-6">“</p>
            <p className="text-green-800 font-bold leading-tight text-3xl">
              <span className=" text-green-800 font-bold" >"Zeal Taste</span> is
              a revelation in street food! The gourmet dishes are not only
              delicious but also beautifully presented. The food truck
              experience is both convenient and indulgent. I can't get enough
              of their truffle mac & cheese!"
            </p>
            <p className="mt-12 text-green-800 font-bold text-2xl ">Sophia Martinez</p>
            <p className="text-gray-600 text-xl">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoicesOfFlavor;
