import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { items, customer } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],

    line_items: items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),

    mode: "payment",

    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,

    metadata: {
      customer_name: customer.first_name + " " + customer.last_name,
      email: customer.email,
      items: JSON.stringify(items),
    },
  });

  return NextResponse.json({ url: session.url });
}