"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const router = useRouter();
  const [pkg, setPkg] = useState(null);
  const [relatedPkgs, setRelatedPkgs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { items, addToCart, increment, decrement } = useCartStore();

  const cartItem = items.find((item) => item.id === pkg?.id);
  // Function to map slugs to images
  const mapImageBySlug = (pkg) => {
    let imageUrl = "/images/placeholder.png"; // default fallback
    if (pkg.slug === "10-appointments") imageUrl = "/images/10App.jpg";
    if (pkg.slug === "25-appointments") imageUrl = "/images/25App.jpg";
    if (pkg.slug === "35-appointments") imageUrl = "/images/35App.jpg";
    return { ...pkg, image_url: imageUrl };
  };

  useEffect(() => {
    const fetchPackage = async () => {
      setLoading(true);
      // Fetch current package
      const { data, error } = await supabase
        .from("packages")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error || !data) {
        console.error("Package not found:", error);
        router.push("/not-found");
      } else {
        const mappedPkg = mapImageBySlug(data);
        setPkg(mappedPkg);

        // Fetch other packages for related products
        const { data: otherPkgs } = await supabase
          .from("packages")
          .select("*")
          .neq("slug", slug);

        const mappedOtherPkgs = (otherPkgs || []).map(mapImageBySlug);
        setRelatedPkgs(mappedOtherPkgs);
      }
      setLoading(false);
    };

    fetchPackage();
  }, [slug, router]);

  if (loading || !pkg) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center text-xl">
        Loading package...
      </div>
    );
  }

  const descriptionPoints = pkg.description
    ? pkg.description.split("\n").filter((line) => line.trim() !== "")
    : [];

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* PACKAGE DETAIL */}
      <section className="w-full py-16 flex justify-center bg-[#f6fafd]">
        <div className="w-[90%] lg:w-[70%] flex flex-col lg:flex-row gap-8">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 h-[350px] relative">
            <Image
              src={pkg.image_url}
              alt={pkg.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Column - Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="text-[32px] font-bold text-[#004188]">
              {pkg.title}
            </h1>
            <p className="text-[24px] font-bold text-[#0e6ace]">
              ${Number(pkg.price).toLocaleString()}.00
            </p>

            <ul className="list-disc list-inside text-gray-700">
              {descriptionPoints.length > 0 ? (
                descriptionPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))
              ) : (
                <li>No description available.</li>
              )}
            </ul>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mt-4">
              {/* ➖ Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrement(pkg.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>

                <span className="px-4 py-1 border rounded">
                  {cartItem ? cartItem.quantity : 0}
                </span>

                <button
                  onClick={() => increment(pkg.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <button
                onClick={async () => {
                  setLoading(true);

                  await new Promise((res) => setTimeout(res, 600));

                  addToCart({
                    id: pkg.id,
                    title: pkg.title,
                    price: pkg.price,
                    slug: pkg.slug,
                    image: pkg.image_url,
                  });

                  setLoading(false);
                  router.push("/cart");
                }}
                disabled={loading}
                className="flex items-center gap-2 bg-[#00cb75] text-white px-6 py-3 rounded-md hover:opacity-90 transition disabled:opacity-70"
              >
                {loading ? (
                  <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                ) : (
                  <>
                    <FaShoppingCart />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      {relatedPkgs.length > 0 && (
        <section className="w-full py-16 bg-white">
          <div className="w-[90%] lg:w-[80%] mx-auto">
            <h2 className="text-[28px] font-bold text-[#004188] mb-8">
              Related Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPkgs.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <div className="w-full h-[220px] relative">
                    <Image
                      src={pkg.image_url}
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
                      ${Number(pkg.price).toLocaleString()}.00
                    </p>

                    {/* Buttons Row */}
                    <div className="w-full flex justify-between items-center mt-4">
                      <button
                        onClick={() =>
                          addToCart({
                            id: pkg.id,
                            title: pkg.title,
                            price: pkg.price,
                            slug: pkg.slug,
                            quantity: 1,
                          })
                        }
                        className="flex items-center gap-2 bg-[#00cb75] text-white px-4 py-2 rounded-md hover:opacity-90 transition"
                      >
                        <FaShoppingCart />
                        Add to cart
                      </button>

                      <Link
                        href={`/product/${pkg.slug}`}
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
      )}

      <Footer />
    </main>
  );
}
