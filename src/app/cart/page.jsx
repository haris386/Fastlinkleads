"use client";

import Header from "@/components/Header";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
const { items, removeFromCart, increment, decrement } = useCartStore();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
    <Header />
    <div>
      
      <h1>Cart</h1>

      {items.length === 0 && <p>Cart is empty</p>}

     {items.map(item => (
  <div key={item.id}>

    <h3>{item.title}</h3>
    <p>${item.price}</p>

    <div className="flex items-center gap-2">
      <button onClick={() => decrement(item.id)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => increment(item.id)}>+</button>
    </div>

    <button onClick={() => removeFromCart(item.id)}>
      Remove
    </button>

  </div>
))}

      <h2>Total: ${total}</h2>
    </div>
    </>
  );
}