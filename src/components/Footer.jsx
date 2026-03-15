"use client";

import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { usePathname } from "next/navigation"; // <-- import usePathname

export default function Footer() {
  const pathname = usePathname(); // current route

  const middleLinks = [
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Tips", href: "/tips" },
    { name: "Training Videos", href: "/training-videos" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <section className="w-full bg-[#fafafa] text-gray-800 pt-12">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* LEFT COL */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <Link href="/">
            <Image
              src="/logos/fastlinkleads.png"
              alt="Fastlink Leads"
              width={250}
              height={70}
              priority
            />
          </Link>
          <p>
            <span className="font-bold">Company Phone #</span>: 844-884-5323
          </p>
          <p>
            <span className="font-bold">Support Email</span>: support@fastlinkleads.com
          </p>
          <p>
            <span className="font-bold">Main Office</span>: Newark, DE
          </p>
        </div>

        {/* MIDDLE COL */}
        <div className="flex flex-col gap-3 lg:w-1/4">
          {middleLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors duration-300 hover:text-[#0858af] ${
                pathname === link.href ? "text-[#00ca72]" : ""
              }`} // active link green
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT COL */}
        <div className="flex flex-col gap-3 lg:w-1/4">
          <Link
            href="/packages"
            className={`transition-colors duration-300 hover:text-[#0858af] ${
              pathname === "/packages" ? "text-[#00ca72]" : ""
            }`}
          >
            Packages
          </Link>
          <Link
            href="/cart"
            className={`flex items-center gap-2 transition-colors duration-300 hover:text-[#0858af] ${
              pathname === "/cart" ? "text-[#00ca72]" : ""
            }`}
          >
            <FiShoppingCart />
            Cart
          </Link>
        </div>
      </div>

      {/* SEPARATOR LINE */}
      <div className="border-t border-gray-300 mt-12"></div>

      {/* TERMS AND COPYRIGHT */}
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center gap-4 py-6 text-gray-600 text-sm">
        <div className="flex gap-4">
          <Link
            href="/terms"
            className={`transition-colors duration-300 hover:text-[#0858af] ${
              pathname === "/terms" ? "text-[#00ca72]" : ""
            }`}
          >
            Terms of Use
          </Link>
          <span>|</span>
          <Link
            href="/privacy"
            className={`transition-colors duration-300 hover:text-[#0858af] ${
              pathname === "/privacy" ? "text-[#00ca72]" : ""
            }`}
          >
            Privacy Policy
          </Link>
        </div>

        <p>© Copyright 2012–2026</p>
      </div>
    </section>
  );
}