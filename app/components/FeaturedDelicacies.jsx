import Image from "next/image";
const FeaturedDelicacies = ({ image, title, description, price }) => {
    return (
      <div className=" bg-orange-50 shadow-md rounded-3xl p-8 text-center h-[500px]">
        {/* Image */}
        <Image src={image} alt={title} className="w-48 h-48 mx-auto rounded-full mb-6" width={96} height={96} />
        
        {/* Title */}
        <h3 className="text-green-800 font-semibold text-4xl font-sansita">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-600  mt-2 text-xl font-lato">{description.map((line,index)=>(
            <span key={index}>{line}</span>
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
  