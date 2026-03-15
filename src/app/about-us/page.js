"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { FaArrowUp } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  const words = ["Here for you", "Ready to help", "Never stopping"];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1500);
    }
  }, [charIndex, wordIndex]);

  // Scroll listener for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <Header />

      {/* HERO SECTION */}

      <section className="w-full flex justify-center py-16">
        <div className="w-[90%] lg:w-[70%] flex flex-col items-center gap-8">
          {/* Heading */}
          <h1 className="text-[35px] font-bold text-[#004188] text-center">
            About Us
          </h1>

          {/* Typewriter Text */}
          <h2 className="text-[45px] font-semibold text-[#00ca72] text-center min-h-[60px]">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="w-full bg-[#014188] py-20 flex justify-center">
        <div className="w-[90%] lg:w-[70%] text-center">
          {/* Heading */}
          <h2 className="text-[35px] font-bold text-white mt-16 mb-6">
            Who We Are
          </h2>

          {/* Text */}
          <p className="text-lg lg:text-xl text-white leading-relaxed">
            Fast Link Leads is dedicated to connecting the country together.
            With decades of experience and connections with the construction and
            insurance industries, we’ve built a database that can serve you
            leads. Our current goal is to build this up to a point where we can
            serve the entire country.
          </p>
        </div>
      </section>

      {/* HOW TO WORK WITH US SECTION */}
      <section className="w-full bg-[#f6fafd] py-20 flex justify-center">
        <div className="w-[90%] lg:w-[80%]">
          {/* Heading */}
          <h2 className="text-[35px] font-bold text-center text-[#024289] mt-16 mb-16">
            How to work with us
          </h2>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* STEP 1 */}
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#024289] text-white text-[80px] font-bold mb-4">
                1
              </div>
              <h3 className="text-[30px] text-[#024289] mb-2">
                Choose Product.
              </h3>
              <p className="text-gray-700 text-[18px] leading-relaxed">
                Select an offering from our Products page.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#024289] text-white text-[80px] font-bold mb-4">
                2
              </div>
              <h3 className="text-[30px] text-[#024289] mb-2">
                Set up an appointment.
              </h3>
              <p className="text-gray-700 text-[18px] leading-relaxed">
                Schedule your appointment with us.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#024289] text-white text-[80px] font-bold mb-4">
                3
              </div>
              <h3 className="text-[30px] text-[#024289] mb-2">
                Start your Campaign.
              </h3>
              <p className="text-gray-700 text-[18px] leading-relaxed">
                Reap the benefits of our expertise!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-[#0858af] py-20 flex justify-center">
        <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* LEFT COL */}
          <div className="text-white text-center lg:text-left lg:w-2/3">
            <h2 className="text-[35px] font-bold mb-4">
              We’re Waiting To Help You
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-relaxed">
              Get in touch with us today and let’s start transforming your
              business from the ground up.
            </p>
          </div>

          {/* RIGHT COL */}
          <div className="lg:w-1/3 flex justify-center">
            <button className="bg-white text-[#0858af] px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-[#0858af] hover:text-white border-2 border-white">
              GET STARTED
            </button>
          </div>
        </div>
      </section>
      <Footer />

      {/* BACK TO TOP BUTTON */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 lg:right-8 z-50 w-14 h-14 rounded-full bg-[#0858af] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </main>
  );
}
