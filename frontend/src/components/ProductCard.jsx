import { useDispatch, useSelector } from "react-redux";
import renderStars from "../utils/renderStars";
import { addToCart } from "../store/slices/cartSlice";
import { toggleItem } from "../store/slices/wishListSlice";
import { toast } from "react-toastify";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist);

  const isWishListEd = wishList.some((u) => u.id === product.id);

  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative">
        <div className="h-80 bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Wishlist */}
        <button
          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition"
          aria-label="Add to Wishlist"
          onClick={() => {
            dispatch(toggleItem(product));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            fill={isWishListEd ? "red" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            stroke={isWishListEd ? "red" : "currentColor"}
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.74 0-3.272.8-4 2.019C11.272 4.55 9.74 3.75 8 3.75c-2.761 0-5 2.015-5 4.5 0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        {/* Badge */}
        <span className="absolute top-4 left-4 bg-black text-white text-sm font-medium px-3 py-1 rounded-full">
          {product.badge || "New"}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-gray-500">
          {product.category}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          {renderStars(product.rating).map((filled, index) => (
            <span
              key={index}
              className={`${filled ? "text-yellow-500" : "text-gray-300"} text-2xl`}
            >
              ★
            </span>
          ))}
          <span className="text-gray-500 text-sm mt-1 ml-1">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${product.originalPrice}
          </span>
        </div>

        {/* CTA */}
        <button
          className="w-full mt-5 py-3 border border-black rounded-xl font-medium hover:bg-black hover:text-white transition"
          onClick={() => {
            toast.success("🛒 Added to cart!");
            dispatch(addToCart(product));
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
