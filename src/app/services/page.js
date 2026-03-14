"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import {
  FaCalendarCheck,
  FaPhoneAlt,
  FaSms,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const words = [
    "Appointment Setting",
    "Telemarketing",
    "Email Marketing",
    "SMS Marketing",
  ];

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
          <h1 className="text-[48px] font-bold text-[#004188] text-center">
            Providing quality services with expert care.
          </h1>

          {/* Typewriter Text */}
          <h2 className="text-[48px] lg:text-[60px] font-semibold text-[#00ca72] text-center min-h-[60px]">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
          <button className="bg-[#0e6acf] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300">
            GET STARTED
          </button>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}

      <section className="w-full bg-[#014188] py-20 flex justify-center">
        <div className="w-[90%] lg:w-[80%]">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* CARD 1: Appointment Setting */}
            <div className="flex flex-col items-center text-center text-white border-4 border-[#1368c8] rounded-[10px] p-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mb-6">
                <FaCalendarCheck />
              </div>
              <h3 className="text-[30px] font-semibold mb-8">
                Appointment Setting
              </h3>
              <p className="text-[#00cb75] text-[18px] leading-relaxed mb-8">
                Verified appointments in your specified location.
              </p>
              <ul className="text-white mb-4 space-y-1">
                <li>Sold only to you.</li>
                <li>Verified by our agents.</li>
                <li>Guaranteed by our policy.</li>
              </ul>
              <a
                href="/packages"
                className="bg-[#00cb75] px-6 py-2 rounded-md font-semibold text-white hover:opacity-90 transition-all duration-300"
              >
                Packages
              </a>
            </div>

            {/* CARD 2: Telemarketing */}
            <div className="flex flex-col items-center text-center text-white border-4 border-[#1368c8] rounded-[10px] p-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mb-6">
                <FaPhoneAlt />
              </div>
              <h3 className="text-[30px] font-semibold mb-8">Telemarketing</h3>
              <p className="text-[#00cb75] text-[18px] leading-relaxed mb-8">
                Telemarketing is tedious and disheartening. Our experts can
                handle this, while you focus on running your company.
              </p>
              <ul className="text-white mb-4 space-y-1">
                <li>Target Businesses or Consumers.</li>
              </ul>
              <a
                href="/packages"
                className="bg-[#00cb75] px-6 py-2 rounded-md font-semibold text-white hover:opacity-90 transition-all duration-300"
              >
                Packages
              </a>
            </div>

            {/* CARD 3: Email Marketing */}
            <div className="flex flex-col items-center text-center text-white border-4 border-[#1368c8] rounded-[10px] p-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mb-6">
                <FaEnvelope />
              </div>
              <h3 className="text-[30px] font-semibold mb-8">Email Marketing</h3>
              <p className="text-[#00cb75] text-[18px] leading-relaxed mb-8">
                When your goal is mass marketing, Email is a go-to inexpensive
                and simple outreach program.
              </p>
              <ul className="text-white mb-4 space-y-1">
                <li>Casting a wide net.</li>
                <li>Inexpensive.</li>
                <li>Simple.</li>
              </ul>
              <a
                href="/packages"
                className="bg-[#00cb75] px-6 py-2 rounded-md font-semibold text-white hover:opacity-90 transition-all duration-300"
              >
                Packages
              </a>
            </div>

            {/* CARD 4: SMS Marketing */}
            <div className="flex flex-col items-center text-center text-white border-4 border-[#1368c8] rounded-[10px] p-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mb-6">
                <FaSms />
              </div>
              <h3 className="text-[30px] font-semibold mb-8">SMS Marketing</h3>
              <p className="text-[#00cb75] text-[18px] leading-relaxed mb-8">
                Instant attention directed to your campaign! Few things can
                compete with this.
              </p>
              <ul className="text-white mb-4 space-y-1">
                <li>Easy attention getter.</li>
                <li>Personalized Messages.</li>
                <li>Premium Service.</li>
              </ul>
              <a
                href="/packages"
                className="bg-[#00cb75] px-6 py-2 rounded-md font-semibold text-white hover:opacity-90 transition-all duration-300"
              >
                Packages
              </a>
            </div>
          </div>
        </div>
      </section>
      
       {/* CTA SECTION */}
      <section className="w-full bg-[#0858af] py-20 flex justify-center">
        <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* LEFT COL */}
          <div className="text-white text-center lg:text-left lg:w-2/3">
            <h2 className="text-4xl font-bold mb-4">
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
