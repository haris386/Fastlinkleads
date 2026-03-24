"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FiShoppingCart } from "react-icons/fi";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items } = useCartStore();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
  });

  const [step1Completed, setStep1Completed] = useState(false);
  const [errors, setErrors] = useState({});

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const validateStep1 = () => {
    const newErrors = {};
    if (!form.first_name.trim()) newErrors.first_name = "Required";
    if (!form.last_name.trim()) newErrors.last_name = "Required";
    if (!form.email.trim()) newErrors.email = "Required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (!form.state.trim()) newErrors.state = "Required";
    if (!form.zip.trim()) newErrors.zip = "Required";
    if (!form.country.trim()) newErrors.country = "Required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateStep1()) {
      setStep1Completed(true);
      setStep(2);
    }
  };

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* TOP INFO BAR */}
       <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr_3fr_1fr] border border-gray-100 text-md text-center">
  <div className="p-3">Hello</div>
  <div className="p-3 text-left">
    Need Assistance? Call customer service at 844-884-5323.
  </div>
  <div className="p-3 text-left">
    E-mail them at support@fastlinkleads.com
  </div>
  <Link href="/cart" className="w-full">
    <div className="p-3 flex items-center justify-center gap-2 cursor-pointer hover:text-blue-600">
      <FiShoppingCart size={18} />
      <span>View Cart</span>
    </div>
  </Link>
</div>

        {/* COUPON ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-4">
          <h2 className="font-semibold text-xl md:text-[40px]">
            Have A Promotional Code?
          </h2>

          <div className="flex w-full md:w-auto gap-3">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border px-4 py-3 rounded-md w-full md:w-[250px]"
            />
            <button className="bg-[#0e6acf] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 mt-10">
          {/* LEFT COL: Vertical Step Menu */}
          <div className="flex flex-col gap-6">
            <div
              className={`cursor-pointer ${
                step === 1 ? "text-blue-600" : "text-gray-400"
              }`}
              onClick={() => setStep(1)}
            >
              Billing Address {">"}
            </div>
            <div
              className={`cursor-pointer ${
                step === 2 ? "text-blue-600" : "text-gray-400"
              } ${
                !step1Completed ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
              onClick={() => {
                if (step1Completed) setStep(2);
              }}
            >
              Review & Payment {">"}
            </div>
          </div>

          {/* RIGHT COL: Step Content */}
          <div>
            {/* STEP 1: Billing Form */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-[40px] font-bold mb-4">Billing Details</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      placeholder="First name *"
                      className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${
                        errors.first_name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#0e6acf]"
                      }`}
                      value={form.first_name}
                      onChange={(e) =>
                        setForm({ ...form, first_name: e.target.value })
                      }
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      placeholder="Last name *"
                      className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${
                        errors.last_name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#0e6acf]"
                      }`}
                      value={form.last_name}
                      onChange={(e) =>
                        setForm({ ...form, last_name: e.target.value })
                      }
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
                    )}
                  </div>
                </div>

                <input
                  placeholder="Company name (optional)"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0e6acf]"
                />

                <input
                  placeholder="Country / Region *"
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${
                    errors.country ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#0e6acf]"
                  }`}
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}

                <input
                  placeholder="Street address *"
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${
                    errors.address ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#0e6acf]"
                  }`}
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}

                <input
                  placeholder="Town / City *"
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${
                    errors.city ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#0e6acf]"
                  }`}
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}

                <input
                  placeholder="State *"
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${
                    errors.state ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#0e6acf]"
                  }`}
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                />
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                )}

                <input
                  placeholder="ZIP Code *"
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${
                    errors.zip ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#0e6acf]"
                  }`}
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                />
                {errors.zip && (
                  <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
                )}

                <input
                  placeholder="Phone *"
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${
                    errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#0e6acf]"
                  }`}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}

                <input
                  placeholder="Email address *"
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#0e6acf]"
                  }`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}

                <div className="text-right">
                  <button
                    onClick={handleContinue}
                    className="bg-[#0e6acf] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Review & Payment */}
            {step === 2 && (
              <div className="space-y-6">
                {/* ORDER SUMMARY */}
                <div className="border border-gray-300 p-5 rounded-md">
                  <h2 className="text-xl font-semibold mb-4">Your Order</h2>

                  <div className="flex justify-between font-semibold border-b border-b-gray-300 pb-2 mb-3">
                    <span>Product</span>
                    <span>Subtotal</span>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between mb-3 items-center"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <span>
                          {item.title} × {item.quantity}
                        </span>
                      </div>
                      <span>${item.price * item.quantity}</span>
                    </div>
                  ))}

                  <div className="border-t  border-t-gray-300 pt-3 mt-3 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${total}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Total</span>
                      <span className="text-blue-600">${total}</span>
                    </div>
                  </div>
                </div>

                {/* STRIPE PAYMENT FIELDS */}
                <div className="space-y-4">
                  <p className="mb-2">Credit Card (Stripe)</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Pay with your credit card via Stripe.
                  </p>

                  <input
                    placeholder="Card Number *"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0e6acf]"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      placeholder="Expiry Date *"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0e6acf]"
                    />
                    <input placeholder="CVC *" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0e6acf]" />
                  </div>

                  <p className="text-xs text-gray-500 mt-6">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>

                  <div className="text-right mt-6">
                    <button className="bg-[#0e6acf] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}