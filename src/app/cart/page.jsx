"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { FaTimes, FaExclamationCircle } from "react-icons/fa";

export default function CartPage() {
  const { items, removeFromCart, increment, decrement } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* EMPTY CART UI */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <FaExclamationCircle className="text-5xl text-gray-400 mb-4" />
            <p className="text-xl font-semibold text-gray-600">
              Your cart is currently empty.
            </p>
          </div>
        ) : (
          <>
            {/* HEADING */}
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              You Have {items.length} Item
              {items.length > 1 && "s"} In Your Cart
            </h1>

            {/* TABLE HEADER */}
            <div className="hidden md:grid grid-cols-5 gap-4 border-b pb-3 font-semibold text-gray-600">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
              <span></span>
            </div>

            {/* ITEMS */}
            {items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center border-b py-4"
              >
                {/* PRODUCT */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="font-medium">{item.title}</span>
                </div>

                {/* PRICE */}
                <div>${item.price.toFixed(2)}</div>

                {/* QUANTITY */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrement(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>

                {/* SUBTOTAL */}
                <div>${(item.price * item.quantity).toFixed(2)}</div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-lg"
                >
                  <FaTimes />
                </button>
              </div>
            ))}

            {/* BOTTOM SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {/* LEFT - COUPON */}
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Have A Promotional Code?
                </h2>

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="border px-4 py-3 rounded-md w-full"
                  />

                  <button className="w-[40%] bg-[#0e6acf] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300">
                    Apply Coupon
                  </button>
                </div>
              </div>

              {/* RIGHT - TOTALS */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Cart Totals</h2>

                <div className="border p-5 rounded-md space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Link href="/shop" className="w-full">
                    <button className="w-full bg-[#0e6acf] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300">
                      Update Cart
                    </button>
                    </Link>

                    <Link href="/checkout" className="w-full">
                      <button className="w-full bg-[#0e6acf] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300">
                        Proceed to Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
