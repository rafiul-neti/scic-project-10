import About from "@/Components/Home/About/About";
import Slider from "@/Components/Home/Slider/Slider";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="pt-16 lg:pt-24">
        <Slider />

        <div className="w-11/12 mx-auto p-2 lg:p-0">
          <About />
        </div>
      </main>
    </div>
  );
}
