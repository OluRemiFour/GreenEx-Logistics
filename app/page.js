"use client";
// import image2 from "@/images/illustration1.png";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./_component/Navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([
    {
      imageUrl: "/illustration1.png",
      headline: "Accessible and Affordable",
      title: "Fast. Reliable. Affordable.",
    },
    {
      imageUrl: "/illustration2.png",
      headline: "Tested and Trusted",
      title: "Your trusted delivery partner",
    },
    {
      imageUrl: "/illustration3.png",
      headline: "Safe and Secure",
      title: "Swift and safe delivery of packages.",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  return (
    <main className="mx-4 my-6">
      <Navigation />

      <div className="flex flex-col items-center md:mt-6 mt-20 justify-center">
        <Link href="/">
          <Image
            src={carouselData[currentIndex].imageUrl}
            quality={80}
            alt="illustration"
            width={300}
            height={300}
            className="transition-all duration-500 w-auto object-cover"
          />
        </Link>

        <h2 className="mt-4 text-xl font-bold">
          {carouselData[currentIndex].headline}
        </h2>
        <p className="text-center text-sm text-slate-500 font-semibold py-4">
          {carouselData[currentIndex].title}
        </p>

        <div className="md:space-x-6 space-x-4 top-[90%] fixed">
          <Link
            href="/personal"
            className="bg-[#6BDA6C] text-white rounded-md border border-[#6BDA6C] py-3 md:px-16 px-4 text-[.9rem] transition-all duration-500 hover:bg-transparent hover:border-black hover:text-black"
          >
            Personal Deliveries
          </Link>
          <Link
            href="/business"
            className="border border-slate-600 text-[.9rem] rounded-md py-3 md:px-16 px-4 transition-all duration-500 hover:border-[#6BDA6C] hover:text-[#6BDA6C]"
          >
            Business Deliveries
          </Link>
        </div>
      </div>
    </main>
  );
}
