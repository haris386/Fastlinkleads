"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

  const words = [
    "when you want them.",
    "where you need them.",
    "that you can trust."
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {

    if (charIndex < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60);

      return () => clearTimeout(timeout);
    } 
    
    else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1500);
    }

  }, [charIndex, wordIndex]);

  return (
    <main>

      <Header />

      {/* HERO SECTION */}

      <section className="w-full flex justify-center py-16">

<div className="w-[90%] lg:w-[70%] flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
  {/* LEFT COL */}

  <div className="w-full lg:w-[30%] flex justify-center">
    <div className="relative w-[380px] h-[550px]">
  <Image
    src="/images/hero-mobile.png"
    alt="Hero"
    fill
    className="object-contain"
    priority
  />
</div>
  </div>

  {/* RIGHT COL */}

  <div className="w-full lg:w-[70%] flex flex-col justify-center items-center">

    {/* heading + typing left aligned */}
    <div className="w-full">

      <h1 className="text-[48px] font-bold text-[#004188]">
        Fast leads
      </h1>

      <h2 className="text-[60px] font-semibold text-[#00ca72] mt-4 min-h-[40px]">
        {text}
        <span className="animate-pulse">|</span>
      </h2>

    </div>

    {/* BUTTONS CENTER */}

    <div className="flex flex-col mt-8 gap-4 items-center">

      <button className="bg-[#004188] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300">
        WHAT WE DO
      </button>

      <button className="bg-[#004188] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300">
        WHO WE ARE
      </button>

      <button className="bg-[#004188] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300">
        HOW IT WORKS
      </button>

    </div>

  </div>

</div>

      </section>

    </main>
  );
}