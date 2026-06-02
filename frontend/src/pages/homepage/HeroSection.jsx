import {NavLink} from "react-router";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center">
        <span className="text-sm font-medium tracking-widest uppercase text-gray-500">
          New Collection 2026
        </span>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          Wear Confidence.
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Discover premium apparel designed for everyday comfort and timeless
          style. From casual essentials to statement pieces.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <NavLink to="/shop" className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
            Shop Now
          </NavLink>

          <NavLink to="/collection" className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
            Explore Collection
          </NavLink>
        </div>
      </div>
    </section>
  );
}
