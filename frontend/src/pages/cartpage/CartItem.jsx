import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/slices/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div
      className="flex gap-5 p-5 bg-white border border-gray-200 rounded-2xl"
      key={item.id}
    >
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-gray-100 shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold text-gray-900 truncate">
              {item.title}
            </h3>

            <button
              className="text-gray-400 hover:text-red-500 transition shrink-0"
              aria-label={`Remove ${item.title}`}
              onClick={() => {
                toast.error("🗑️ Item removed from cart.");
                dispatch(removeFromCart(item.id));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-1">${item.price}</p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition rounded-l-lg"
              aria-label="Decrease quantity"
              onClick={() => {
                if (item.quantity !== 1) {
                  toast.info("➖ Decreased item quantity.");
                  dispatch(decreaseQuantity(item.id));
                } else {
                  toast.warning(
                    "⚠️ Minimum quantity is 1. Use the remove button to delete.",
                  );
                }
              }}
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
                  d="M5 12h14"
                />
              </svg>
            </button>

            <span className="px-4 py-1.5 text-sm font-medium text-gray-900 min-w-[40px] text-center border-x border-gray-300">
              {item.quantity}
            </span>

            <button
              className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition rounded-r-lg"
              aria-label="Increase quantity"
              onClick={() => {
                toast.info("➕ Increased item quantity!");
                dispatch(increaseQuantity(item.id));
              }}
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>

          <p className="text-base font-semibold text-gray-900">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
