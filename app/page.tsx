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
export default function Home() {
  const { heading1, heading2, description } = SectionTitleData[0];
  
  return (
    
    <div>
    <Header/>
    <Hero/>
    {/*InfoCard*/}
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
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
    <div className="bg-teal-50 min-h-screen">
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

    
   
    </div>
     
      

);
}
     


