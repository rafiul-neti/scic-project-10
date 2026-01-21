
import About from "@/Components/Home/About/About";
import OurBarbers from "@/Components/Home/OurBarbers/OurBarbers";
import PricePlan from "@/Components/Home/PricePlan/PricePlan";
import Services from "@/Components/Home/Services/Services";
import WorkingDays from "@/Components/Home/ShopTime/WorkingDays";
import Slider from "@/Components/Home/Slider/Slider";
import Testimonial from "@/Components/Home/Testimonial/Testimonial";


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      
      <>
        <Slider />

        <div className="lg:w-11/12 lg:mx-auto p-7 sm:p-3 lg:p-0">
          <About />
          <Services />
          <PricePlan />
          <OurBarbers />
          <WorkingDays />
          <Testimonial />
        </div>
      </>
      
    </div>
  );
}
