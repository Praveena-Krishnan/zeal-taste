import Image from "next/image";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import InfoCard from "./components/InfoCard";
import CardData from "../Data/CardData";

export default function Home() {
  
  return (
    
    <div>
    <Header/>
    <Hero/>
    <section className="bg-white py-12">
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
    </div>
     
      

);
}
     


