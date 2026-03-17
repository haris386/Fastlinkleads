"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Tips", href: "/tips" },
    { label: "Training Videos", href: "/training-videos" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact-us" },
    { label: "Packages", href: "/shop" },
  ];

  const leftVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 12 } },
  };

  const rightVariant = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.2 } },
  };

  return (
    <header className="w-full flex justify-center bg-white relative z-50 overflow-x-hidden">
      <div className="w-[90%] flex items-center justify-between py-4">

        {/* Logo */}
        <motion.div variants={leftVariant} initial="hidden" animate="visible">
          <Link href="/">
            <Image
              src="/logos/fastlinkleads.png"
              alt="Fastlink Leads"
              width={200}
              height={40}
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.nav
          className="hidden lg:flex items-center gap-2"
          variants={rightVariant}
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#1465bc] font-medium px-3 py-2 border border-transparent rounded-[10px] hover:border-[#1465bc] transition-all duration-300 ease-in-out"
            >
              {item.label}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link href="/cart">
            <FiShoppingCart size={22} />
          </Link>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          variants={rightVariant}
          initial="hidden"
          animate="visible"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed z-10 top-[70px] left-0 w-full bg-white shadow-lg lg:hidden">
          <div className="flex flex-col items-center py-6 gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 text-lg font-medium text-center"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-lg text-center"
            >
              <FiShoppingCart />
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}