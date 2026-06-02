import { NavLink } from "react-router";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductNotFound from "./ProductNotFound";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const respone = await axios.get(
            `http://localhost:3000/products/${id}`,
          );
          setProduct(respone.data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const onChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/products/${id}`, product);
    setProduct(null);
    navigate("/admin");
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Edit Product</h1>
          <p className="text-sm text-slate-500">
            Complete the product details to match the store schema.
          </p>
        </div>
        <NavLink
          to="/admin"
          className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-100 px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          Back to Admin
        </NavLink>
      </div>

      {product ? (
        <form
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          onSubmit={(e) => onSubmitHandler(e)}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Title
              <input
                name="title"
                placeholder="Premium Oversized Tee"
                value={product.title}
                onChange={onChangeHandler}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                required
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Category
              <input
                name="category"
                value={product.category}
                onChange={onChangeHandler}
                placeholder="Men"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                required
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Image URL
              <input
                name="image"
                placeholder="https://images.unsplash.com/..."
                value={product.image}
                onChange={onChangeHandler}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                required
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Badge
              <input
                name="badge"
                placeholder="New Arrival"
                value={product.badge}
                onChange={onChangeHandler}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Price
              <input
                name="price"
                type="number"
                value={product.price}
                onChange={onChangeHandler}
                step="0.01"
                placeholder="29.99"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                required
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Original Price
              <input
                name="originalPrice"
                type="number"
                value={product.originalPrice}
                onChange={onChangeHandler}
                step="0.01"
                placeholder="39.99"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Rating
              <input
                name="rating"
                type="number"
                value={product.rating}
                onChange={onChangeHandler}
                min="1"
                max="5"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Review Count
              <input
                name="reviewCount"
                type="number"
                value={product.reviewCount}
                onChange={onChangeHandler}
                min="0"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Featured
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <input
                  name="featured"
                  type="checkbox"
                  checked={product.featured}
                  onChange={onChangeHandler}
                  className="h-5 w-5 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
                />
                <span className="text-sm text-slate-600">
                  Mark as featured item
                </span>
              </div>
            </label>

            <label className="block text-sm font-medium text-slate-700">
              In Stock
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <input
                  name="inStock"
                  type="checkbox"
                  checked={product.inStock}
                  onChange={onChangeHandler}
                  className="h-5 w-5 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
                />
                <span className="text-sm text-slate-600">
                  Available for purchase
                </span>
              </div>
            </label>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              This form matches the product schema from db.json.
            </p>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Save Product
            </button>
          </div>
        </form>
      ) : (
        <ProductNotFound />
      )}
    </div>
  );
}
