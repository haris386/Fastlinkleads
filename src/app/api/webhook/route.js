import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { headers } from "next/headers";

export async function POST(req) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");

  const event = stripe.webhooks.constructEvent(
    body,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const items = JSON.parse(session.metadata.items);

    // 1. Insert Order
    const { data: order } = await supabaseAdmin
      .from("orders")
      .insert({
        customer_name: session.metadata.customer_name,
        email: session.metadata.email,
        total_amount: session.amount_total / 100,
        stripe_session_id: session.id,
      })
      .select()
      .single();

    // 2. Insert Order Items
    const orderItems = items.map((item) => ({
      order_id: order.id,
      package_id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    }));

    await supabaseAdmin.from("order_items").insert(orderItems);
  }

  return new Response("OK", { status: 200 });
}