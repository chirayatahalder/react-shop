export default function OrderSummary({ cart }) {
  const subTotal = cart.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0);
  const tax = subTotal * 0.08;
  const shippingCharge = subTotal > 100 ? 0 : 9.99;
  const orderTotal = subTotal + shippingCharge + tax;

  return (
    <div className="lg:col-span-1">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Order Summary
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-gray-900">${subTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium text-gray-900">
              {shippingCharge === 0 ? "Free" : "$9.99"}
            </span>
          </div>

          <p className="text-xs text-gray-400">
            Free shipping on orders over $100
          </p>

          <div className="flex justify-between">
            <span className="text-gray-600">Tax (8%)</span>
            <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
          </div>
        </div>

        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between">
            <span className="text-base font-semibold text-gray-900">Total</span>
            <span className="text-base font-bold text-gray-900">
              ${orderTotal.toFixed(2)}
            </span>
          </div>
        </div>

        <button className="w-full mt-6 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
          Proceed to Checkout
        </button>

        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="text-xs text-gray-400">We accept</span>
          <div className="flex gap-2">
            <span className="px-2 py-1 text-[10px] font-semibold border border-gray-300 rounded text-gray-500">
              VISA
            </span>
            <span className="px-2 py-1 text-[10px] font-semibold border border-gray-300 rounded text-gray-500">
              MC
            </span>
            <span className="px-2 py-1 text-[10px] font-semibold border border-gray-300 rounded text-gray-500">
              AMEX
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
