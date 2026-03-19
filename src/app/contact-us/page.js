"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { FaQuoteLeft, FaArrowUp } from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const words = ["We’re Here To Help"];

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
    <main className="overflow-x-hidden">
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
              Get In Touch Today
            </h1>

            {/* Typewriter Text */}
            <h2 className="text-[45px] font-semibold text-[#00ca72] text-center min-h-[60px]">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </section>
      </motion.div>
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
