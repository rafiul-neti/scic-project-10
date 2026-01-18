import About from "@/Components/Home/About/About";
import PricePlan from "@/Components/Home/PricePlan/PricePlan";
import Services from "@/Components/Home/Services/Services";
import Slider from "@/Components/Home/Slider/Slider";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="pt-16 lg:pt-24">
        <Slider />

        <div className="lg:w-11/12 lg:mx-auto p-7 sm:p-3 lg:p-0">
          <About />
          <Services />
          <PricePlan />
        </div>
      </main>
    </div>
  );
}
