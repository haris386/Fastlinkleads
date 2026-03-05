"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "About",
    "Services",
    "Industries",
    "Tips",
    "Training Videos",
    "Reviews",
    "Contact",
    "Packages",
  ];

  return (
    <header className="w-full flex justify-center bg-white">
      
      <div className="w-[90%] flex items-center justify-between py-4">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logos/fastlinkleads.png"
            alt="Fastlink Leads"
            width={200}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2">

          {menuItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[#004188] font-medium px-3 py-1 border border-transparent rounded-[5px] hover:border-[#004188] transition-all duration-300 ease-in-out"
            >
              {item}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link href="/cart">
            <FiShoppingCart size={22} />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg lg:hidden">

          <div className="flex flex-col items-center py-6 gap-6">

            {menuItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 text-lg font-medium"
              >
                {item}
              </Link>
            ))}

            <Link
              href="/cart"
              className="flex items-center gap-2 text-lg"
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