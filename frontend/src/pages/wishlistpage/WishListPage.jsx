import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import ProductCard from "../../components/ProductCard";

export default function WishListPage() {
  const wishList = useSelector((state) => state.wishlist);

  if (wishList.length === 0) {
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Your Wishlist is Empty
          </h2>

          <p className="text-gray-500 mb-8">
            Looks like you haven't added anything to your wishlist yet.
          </p>

          <NavLink
            to="/collection"
            className="inline-block bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            Browse Products
          </NavLink>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Wish List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishList.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}