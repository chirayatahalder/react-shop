import { NavLink } from "react-router";

export default function categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Shop By Category</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <NavLink
          to="/collection?category=men"
          className="border rounded-xl p-10 text-center hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold">Men</h3>
          <p className="mt-2 text-gray-600">
            Modern essentials for everyday wear.
          </p>
        </NavLink>

        <NavLink
          to="/collection?category=women"
          className="border rounded-xl p-10 text-center hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold">Women</h3>
          <p className="mt-2 text-gray-600">
            Elegant styles crafted for comfort.
          </p>
        </NavLink>

        <NavLink
          to="/collection?category=Footwear"
          className="border rounded-xl p-10 text-center hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold">Footwear</h3>
          <p className="mt-2 text-gray-600">
            Complete your look with essentials.
          </p>
        </NavLink>
      </div>
    </section>
  );
}
