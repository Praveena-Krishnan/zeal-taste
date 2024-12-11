import Image from "next/image";
const CustomImage = ({ src, alt, classes }) => {
    return (
      <div className={`overflow-hidden rounded-full ${classes}`}>
        <Image src={src} alt={alt} className="object-cover w-full h-full" />
      </div>
    );
  };
  
  export default CustomImage;
  