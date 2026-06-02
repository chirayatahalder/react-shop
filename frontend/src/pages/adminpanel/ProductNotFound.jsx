import { NavLink, useParams } from "react-router";

export default function ProductNotFound() {
  const { id } = useParams();

  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-20 h-20 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Product Not Found
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-2">
          Sorry, the product you're looking for doesn't exist or has been
          removed.
        </p>

        {/* Product ID */}
        {id && <p className="text-sm text-gray-400 mb-6">Product ID: {id}</p>}

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <NavLink
            to="/admin"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            View All Products
          </NavLink>
        </div>
      </div>
    </div>
  );
}
