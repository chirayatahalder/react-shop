import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <span className="text-xl font-bold text-gray-800">React Shop</span>
        </NavLink>

        {/* Menu */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-semibold transition ${
                isActive ? "text-black" : "text-gray-600 hover:text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `text-sm font-semibold transition ${
                isActive ? "text-black" : "text-gray-600 hover:text-black"
              }`
            }
          >
            Collection
          </NavLink>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-8">
          <NavLink to="/cart" className="relative">
            <span className="h-6 w-6 text-gray-700">Cart</span>

            {/* Cart Count */}
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-semibold bg-black text-white rounded-full">
              0
            </span>
          </NavLink>
          <NavLink to="/admin" className="relative">
            <span className="h-6 w-6 text-gray-700">Admin</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
