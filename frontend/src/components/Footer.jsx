import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">React Shop</h2>
            <p className="text-sm text-gray-600">
              Your one-stop destination for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-600 hover:text-black transition"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/collection"
                  className="text-gray-600 hover:text-black transition"
                >
                  Collection
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-600 hover:text-black transition"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-600 hover:text-black transition"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/faq"
                  className="text-gray-600 hover:text-black transition"
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shipping"
                  className="text-gray-600 hover:text-black transition"
                >
                  Shipping
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/returns"
                  className="text-gray-600 hover:text-black transition"
                >
                  Returns
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy"
                  className="text-gray-600 hover:text-black transition"
                >
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Stay Updated</h3>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="bg-black text-white px-4 rounded-r-md hover:bg-gray-800 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 React Shop. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm">
            <NavLink to="/terms" className="text-gray-500 hover:text-black transition">
              Terms
            </NavLink>
            <NavLink to="/privacy" className="text-gray-500 hover:text-black transition">
              Privacy
            </NavLink>
            <NavLink to="/support" className="text-gray-500 hover:text-black transition">
              Support
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
