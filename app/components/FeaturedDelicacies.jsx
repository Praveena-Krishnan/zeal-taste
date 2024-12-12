import Image from "next/image";
const FeaturedDelicacies = ({ image, title, description, price }) => {
    return (
      <div className=" bg-orange-50 shadow-md rounded-3xl p-4 text-center">
        {/* Image */}
        <Image src={image} alt={title} className=" mx-auto w-24 h-24  rounded-full mb-4 " width={24} height={24} />
        
        {/* Title */}
        <h3 className="text-green-800 font-semibold text-4xl">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-600  mt-2 text-xl">{description.map((line,index)=>(
            <span key={index} className="block">{line}</span>
        ))}</p>
        
        {/* Price */}
        <div className="mt-8 mb-8">
          <span className="text-white bg-green-800 px-6 py-4 rounded-full text-xl">
            ${price}
          </span>
        </div>
      </div>
    );
  };
  
  export default FeaturedDelicacies;
  