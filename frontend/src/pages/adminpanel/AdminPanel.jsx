import { NavLink, useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [products]);

  const deleteHandler = async (id) => {
    if (window.event) {
    window.event.preventDefault();
    window.event.stopPropagation();
  }
    console.log("Deleting product with id:", id);
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const editHandler = (url) => {
    navigate(url);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <NavLink
          to="/"
          className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-100 px-5 text-sm font-semibold text-dark transition hover:bg-slate-200"
        >
          &lt; Back to Store
        </NavLink>
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <NavLink
          to="/admin/create"
          className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Create Product
        </NavLink>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Product List</h2>
            <p className="text-sm text-slate-500">
              All products currently available in the store.
            </p>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            {products.length} items
          </span>
        </div>

        <div className="space-y-4">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
