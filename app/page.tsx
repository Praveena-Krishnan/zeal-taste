import Image from "next/image";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import InfoCard from "./components/InfoCard";
import CardData from "../Data/CardData";
import SectionTitleData from "../Data/SectionTitleData";
import SectionTitle from "./components/SectionTitle";
import CustomImage from "./components/OurStoryimg";
import StatCircle from "./components/OurStorycircle";
import { HiOutlineUsers, HiOutlineCamera,} from 'react-icons/hi';
import image_1 from "../public/images/image1.png";
import image_2 from "../public/images/image2.png";
import image_3 from "../public/images/image3.png";
import FeaturedDelicacies from "./components/FeaturedDelicacies";
import boxData from "../Data/BoxData";
import VoiceOfFlavour from "./components/VoiceOfFlavour";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  const { heading1, heading2, description } = SectionTitleData[0];
  
  return (
    
    <div>
    <Header/>
    <Hero/>
    {/*InfoCard*/}
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {CardData.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
    <div className="bg-teal-50 min-h-screen pb-16">
    <SectionTitle  heading1={heading1} heading2={heading2} description={description}/>
    {/*our story images*/}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* Image 1 and Stat Circle 1 */}
          <div className="flex flex-col items-center">
            <CustomImage src={image_1} alt="Image 1" classes="w-100 h-100 rounded-r mb-10" />
            <StatCircle icon={<HiOutlineUsers />} count="14K+" label="follow us" />
          </div>

          {/* Image 2 */}
          <div>
            <CustomImage src={image_2} alt="Image 2" classes="w-100 h-100" />
          </div>

          {/* Image 3 and Stat Circle 2 */}
          <div className="flex flex-col items-center">
            <StatCircle icon={<HiOutlineCamera />} count="14K+" label="subscribe" />
            <CustomImage src={image_3} alt="Image 3" classes="w-100 h-100 rounded-l mt-10" /> 
          </div>
        </div>
      </div>
      <section className="bg-white py-12 pt-0">
      {/* Section Title */}
      <SectionTitle heading1="Featured Delicacies" heading2="Signature Selections " description={null} />

      {/* Boxes */}
      <div className="flex px-52">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
        {boxData.map((box, index) => (
          <FeaturedDelicacies
            key={index}
            image={box.image}
            title={box.title}
            description={box.description}
            price={box.price}
          />
        ))}
      </div>
      </div>
    </section>
    <VoiceOfFlavour/>
    <FeatureCard/>
    
   
    </div>
     
      

);
}
     


