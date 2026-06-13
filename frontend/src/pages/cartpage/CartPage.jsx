import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  let cartCount = cart.reduce((total, currentItem) => {
    return total + currentItem.quantity;
  }, 0);

  if (cartCount === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>

          <NavLink
            to="/collection"
            className="inline-block bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            Continue Shopping
          </NavLink>
        </div>
      </section>
    );
  }
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <p className="text-gray-500 text-sm mt-1">
          {cartCount} items in your cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {/* Item 1 */}
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}

          <NavLink
            to="/collection"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Continue Shopping
          </NavLink>
        </div>

        {/* Order Summary */}
        <OrderSummary cart={cart}/>
      </div>
    </section>
  );
}
