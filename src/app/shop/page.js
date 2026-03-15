"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaShoppingCart, FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function ShopPage() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const [order, setOrder] = useState("asc");
  const [showCount, setShowCount] = useState(12);

  const packages = [
    {
      title: "10 Appointments",
      price: 1000,
      image: "/images/10App.jpg",
      date: 1,
      popularity: 2,
    },
    {
      title: "25 Appointments",
      price: 2375,
      image: "/images/20App.jpg",
      date: 2,
      popularity: 3,
    },
    {
      title: "35 Appointments",
      price: 3200,
      image: "/images/30App.jpg",
      date: 3,
      popularity: 1,
    },
  ];

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

  const sortedPackages = [...packages].sort((a, b) => {
    let result = 0;

    if (sortBy === "name") result = a.title.localeCompare(b.title);
    if (sortBy === "price") result = a.price - b.price;
    if (sortBy === "date") result = a.date - b.date;
    if (sortBy === "popularity") result = a.popularity - b.popularity;

    return order === "asc" ? result : -result;
  });

  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="w-full flex justify-center py-16">
        <div className="w-[90%] lg:w-[70%] flex flex-col items-center gap-4">
          <h1 className="text-[40px] font-bold text-[#004188] text-center">
            Packages
          </h1>

          <div className="text-gray-600 text-[16px]">
            <Link href="/" className="hover:text-[#0858af]">
              Home
            </Link>
            <span className="mx-2">»</span>
            <span className="text-[#0858af] font-medium">Packages</span>
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="w-full bg-[#f6fafd] py-20 flex justify-center">
        <div className="w-[90%] lg:w-[80%]">
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border px-4 py-2 rounded-md"
            >
              <option value="default">Sort by Default Order</option>
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="date">Sort by Date</option>
              <option value="popularity">Sort by Popularity</option>
            </select>

            {/* Order Button */}
            <button
              onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
              className="bg-[#0858af] text-white px-4 py-2 rounded-md"
            >
              {order === "asc" ? "Ascending ↑" : "Descending ↓"}
            </button>

            {/* Show Products */}
            <select
              value={showCount}
              onChange={(e) => setShowCount(Number(e.target.value))}
              className="border px-4 py-2 rounded-md"
            >
              <option value={12}>Show 12 Products</option>
              <option value={24}>Show 24 Products</option>
              <option value={36}>Show 36 Products</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sortedPackages.slice(0, showCount).map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="w-full h-[220px] relative">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col items-center text-center gap-4">
                  <h3 className="text-[22px] font-semibold text-[#004188]">
                    {pkg.title}
                  </h3>

                  <p className="text-[20px] font-bold text-[#0e6ace]">
                    ${pkg.price.toLocaleString()}.00
                  </p>

                  {/* Buttons Row */}
                  <div className="w-full flex justify-between items-center mt-4">
                    <button className="flex items-center gap-2 bg-[#00cb75] text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                      <FaShoppingCart />
                      Add to cart
                    </button>

                    <Link
                      href="/contact"
                      className="text-[#0858af] font-semibold hover:underline"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* BACK TO TOP */}
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
