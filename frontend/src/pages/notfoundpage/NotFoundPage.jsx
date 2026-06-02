import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="text-7xl font-bold text-gray-200 mb-4">404</div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          This page is still on our wishlist 🛒
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Looks like you've discovered a page that doesn't exist yet. We're
          constantly adding new features and content, so it might show up here
          in the future.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <NavLink
            to="/"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Back to Home
          </NavLink>

          <NavLink
            to="/collection"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Browse Products
          </NavLink>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          If you think this page should exist, check back soon. We're always
          working on something new.
        </p>
      </div>
    </div>
  );
}
