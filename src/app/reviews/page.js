"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { FaQuoteLeft, FaArrowUp } from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ReviewsPage() {
  const words = ["Respected", "Trusted", "Dependable"];

  const words2 = ["Quick Contact"];

  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [wordIndex2, setWordIndex2] = useState(0);
  const [charIndex2, setCharIndex2] = useState(0);
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

  useEffect(() => {
    if (charIndex2 < words2[wordIndex2].length) {
      const timeout = setTimeout(() => {
        setText2((prev) => prev + words2[wordIndex2][charIndex2]);
        setCharIndex2((prev) => prev + 1);
      }, 60);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText2("");
        setCharIndex2(0);
        setWordIndex2((prev) => (prev + 1) % words2.length);
      }, 1500);
    }
  }, [charIndex2, wordIndex2]);

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

  return (
    <main>
      <Header />

      {/* HERO SECTION */}

      <motion.div
        className="flex flex-col text-white"
        variants={cardUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="w-full flex justify-center py-16">
          <div className="w-[90%] lg:w-[70%] flex flex-col items-center gap-8">
            {/* Heading */}
            <h1 className="text-[35px] font-bold text-[#004188] text-center">
              Reviews
            </h1>

            {/* Typewriter Text */}
            <h2 className="text-[45px] font-semibold text-[#00ca72] text-center min-h-[60px]">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
                        <Link href="/shop">
            <button className="bg-[#0e6acf] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300">
              GET STARTED
            </button>
            </Link>

          </div>
        </section>
      </motion.div>
      {/* WHAT WE DO SECTION */}

      <section className="w-full bg-[#014188] py-20 flex justify-center">
        <div className="w-[90%] lg:w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* TESTIMONIAL 1 */}
            <motion.div
              className="flex flex-col text-white"
              variants={cardLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center text-white border-4 border-[#1368c8] rounded-[10px] p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mb-6">
                  <FaQuoteLeft />
                </div>
                <h3 className="text-[26px] font-semibold mb-6">
                  Business is a lot more reliable with a good leads provider. I
                  just moved with my family to a new state, but I’m still able
                  to be a self-employed carpsenter.{" "}
                </h3>

                <p className="text-[#00cb75] text-[18px] leading-relaxed mb-6">
                  John (Anonymous), Independent Carpenter
                </p>
              </div>
            </motion.div>
            {/* TESTIMONIAL 2 */}
            <motion.div
              className="flex flex-col text-white"
              variants={cardRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center text-white border-4 border-[#1368c8] rounded-[10px] p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#014188] text-2xl mb-6">
                  <FaQuoteLeft />
                </div>

                <h3 className="text-[26px] font-semibold mb-6">
                  I’m happy to work with Fast Link. They’ve made a package with
                  my needs in mind, so I have no compromises.
                </h3>

                <p className="text-[#00cb75] text-[18px] leading-relaxed mb-6">
                  Joseph DeLancey, Roofing Manager
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="w-full bg-[#f6fafd] py-20 flex justify-center">
        <div className="w-[90%] lg:w-[70%] flex flex-col items-center gap-6">
          <motion.div
            className="flex flex-col text-white"
            variants={cardLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2 className="text-[35px] font-bold text-[#004188] text-center">
              Send Us A Message
            </h2>
            {/* Typewriter Heading */}
            <h2 className="text-[45px] font-semibold text-[#00ca72] text-center min-h-[60px]">
              {text2}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Contact Form Component */}
          <div className="w-full mt-6">
            <motion.div
              className="flex flex-col text-white"
              variants={cardUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ContactForm />
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
