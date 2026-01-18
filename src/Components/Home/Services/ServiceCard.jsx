"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
});

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="overflow-hidden bg-[#191C24] shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-red-500/20 flex gap-7 py-5 rounded">
      {/* Icon container (top-left cut style) */}
      <div className="mt-12 sm:mt-4 lg:mt-8 bg-black w-15 h-15 flex items-center justify-center aspect-square rounded-tr rounded-br">
        <Image src={image} alt={title} className="object-contain" />
      </div>

      {/* Content */}
      <div className="py-12 pr-12 pl-8 sm:pl-0 sm:py-4 lg:py-8 lg:pr-8 sm:pr-4">
        <h3 className="text-white text-3xl font-bold uppercase mb-4">
          {title}
        </h3>

        <p className={`text-slate-500 text-[17px] mb-6 ${roboto.className}`}>
          {description}
        </p>

        <span
          className={`text-red-600 font-semibold tracking-wide uppercase ${roboto.className}`}
        >
          From $15
        </span>
      </div>
    </div>
  );
}
