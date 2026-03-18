"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import {
  FaUserCheck,
  FaPhoneAlt,
  FaSms,
  FaShareAlt,
  FaArrowUp,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const words = [
    "when you want them.",
    "where you need them.",
    "that you can trust.",
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

  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  const rightVariant = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 15, delay: 0.2 },
    },
  };

  const cardLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  const cardUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 15, delay: 0.2 },
    },
  };

  const cardRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 15, delay: 0.4 },
    },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <Header />

      {/* HERO SECTION */}

      <section className="w-full flex justify-center py-16">
        <div className="w-[90%] lg:w-[70%] flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          {/* LEFT COL - Slide in from left */}
          <motion.div
            className="w-full lg:w-[30%] flex justify-center"
            variants={leftVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-[380px] h-[550px]">
              <Image
                src="/images/hero-mobile.png"
                alt="Hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT COL - Slide down */}
          <motion.div
            className="w-full lg:w-[70%] flex flex-col justify-center items-center"
            variants={rightVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full text-center lg:text-left">
              <h1 className="text-[48px] font-bold text-[#004188]">
                Fast leads
              </h1>
              <h2 className="text-[60px] font-semibold text-[#00ca72] mt-4 min-h-[40px]">
                {text}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <div className="flex flex-col mt-8 gap-4 items-center">
              <button
                onClick={() => scrollToSection("what-we-do")}
                className="bg-[#0e6acf] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300"
              >
                WHAT WE DO
              </button>
              <button
                onClick={() => scrollToSection("who-we-are")}
                className="bg-[#0e6acf] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300"
              >
                WHO WE ARE
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="bg-[#0e6acf] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300"
              >
                HOW IT WORKS
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}

      <section
        id="what-we-do"
        className="w-full bg-[#014188] py-20 flex justify-center"
      >
        <div className="w-[90%] lg:w-[80%]">
          {/* Heading */}

          <h2 className="text-white text-4xl font-bold text-center mb-16">
            What we do for you.
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {" "}
            {/* CARD 1 */}
            <motion.div
              className="flex flex-col items-center text-center text-white"
              variants={cardLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mb-6">
                <FaUserCheck />
              </div>
              <h3 className="text-xl font-semibold mb-3">Leads</h3>
              <p className="text-[20px] leading-relaxed mb-4">
                We provide guaranteed promising leads in an area you specify,
                sold to you and you alone.
              </p>
              <a href="#" className="font-semibold hover:underline">
                Learn More &gt;
              </a>
            </motion.div>
            {/* CARD 2 - Slide Up */}
            <motion.div
              className="flex flex-col items-center text-center text-white"
              variants={cardUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mb-6">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Telemarketing</h3>
              <p className="text-[20px] leading-relaxed mb-4">
                Our telemarketing staff will reach out on your behalf.
              </p>
              <a href="#" className="font-semibold hover:underline">
                Learn More &gt;
              </a>
            </motion.div>
            {/* CARD 3 - Slide Right */}
            <motion.div
              className="flex flex-col items-center text-center text-white"
              variants={cardRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mb-6">
                <FaSms />
              </div>
              <h3 className="text-xl font-semibold mb-3">SMS Marketing</h3>
              <p className="text-[20px] leading-relaxed mb-4">
                Benefit from the instant attention generated by a text message.
              </p>
              <a href="#" className="font-semibold hover:underline">
                Learn More &gt;
              </a>
            </motion.div>
            {/* CARD 4 - Slide Right */}
            <motion.div
              className="flex flex-col items-center text-center text-white"
              variants={cardRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mb-6">
                <FaShareAlt />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media</h3>
              <p className="text-[20px] leading-relaxed mb-4">
                A social media profile managed professionally to generate
                attention and awareness.
              </p>
              <a href="#" className="font-semibold hover:underline">
                Learn More &gt;
              </a>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col text-white"
            variants={cardRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-white text-4xl font-bold text-center mt-36 mb-16">
              Why Us?
            </h2>

            {/* Points - vertical stack */}
            <div className="flex flex-col gap-12">
              {/* POINT 1 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mt-1">
                  <FaUserCheck />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Guaranteed Leads
                  </h3>
                  <p className="text-white text-[18px] leading-relaxed">
                    We stand by every lead we give you. If any of them don’t
                    deliver, we’ll bring you ones that do.
                  </p>
                </div>
              </div>

              {/* POINT 2 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mt-1">
                  <FaPhoneAlt />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Exclusive Leads
                  </h3>
                  <p className="text-white text-[18px] leading-relaxed">
                    Our leads are guaranteed to only be sold to you. While other
                    companies play shady games selling the same customer to two
                    people, we won’t create extra competition for you.
                  </p>
                </div>
              </div>

              {/* POINT 3 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mt-1">
                  <FaShareAlt />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    No Contracts
                  </h3>
                  <p className="text-white text-[18px] leading-relaxed">
                    We won’t lock you into anything. Use us once, if you like us
                    then you can keep coming back.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section
        id="who-we-are"
        className="w-full bg-white py-20 flex justify-center"
      >
        <div className="w-[90%] lg:w-[70%] text-center">
          {/* Heading */}
          <motion.div
            className="flex flex-col text-white"
            variants={cardUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#004188] mt-16 mb-6">
              Who We Are
            </h2>

            {/* Text */}
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Fast Link Leads is dedicated to connecting the country together.
              With decades of experience and connections with the construction
              and insurance industries, we’ve built a database that can serve
              you leads. Our current goal is to build this up to a point where
              we can serve the entire country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HOW TO WORK WITH US SECTION */}
      <section
        id="how-it-works"
        className="w-full bg-[#f6fafd] py-20 flex justify-center"
      >
        <div className="w-[90%] lg:w-[80%]">
          {/* Heading */}
          <motion.div
            className="flex flex-col text-white"
            variants={cardUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-[#024289] mt-16 mb-16">
              How to work with us
            </h2>
          </motion.div>
          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* STEP 1 */}
            <motion.div
              className="flex flex-col text-white"
              variants={cardLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
            </motion.div>
            {/* STEP 2 */}
            <motion.div
              className="flex flex-col text-white"
              variants={cardUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
            </motion.div>

            {/* STEP 3 */}
            <motion.div
              className="flex flex-col text-white"
              variants={cardRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <motion.section
        className="w-full bg-[#0858af] py-20 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* LEFT COL */}
          <motion.div
            className="text-white text-center lg:text-left lg:w-2/3"
            variants={cardUp}
          >
            <h2 className="text-4xl font-bold mb-4">
              We’re Waiting To Help You
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-relaxed">
              Get in touch with us today and let’s start transforming your
              business from the ground up.
            </p>
          </motion.div>

          {/* RIGHT COL */}
          <motion.div
            className="lg:w-1/3 flex justify-center"
            variants={cardUp}
          >
            <Link href="/shop">
              <button className="bg-white text-[#0858af] px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-[#0858af] hover:text-white border-2 border-white">
                GET STARTED
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
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
