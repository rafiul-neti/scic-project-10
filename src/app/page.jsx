import Slider from "@/Components/Home/Slider/Slider";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <main className="pt-16 lg:pt-24">
        <Slider />
      </main>
    </div>
  );
}
