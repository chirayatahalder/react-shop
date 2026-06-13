import ProductCard from "../../components/ProductCard";
import { useSearchParams } from "react-router";
import { useState, useMemo } from "react";

export default function ProductsGrid({ products }) {
  const [filterValue, setFilterValue] = useState("all");
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const categorizedProducts = category
    ? products.filter((p) => p.category.toLowerCase() === category)
    : products;

  const displayProducts = useMemo(() => {
    if (filterValue === "featured") {
      return categorizedProducts.filter((p) => p.featured);
    } else if (filterValue === "newest") {
      return categorizedProducts.filter((p) => p.badge === "New Arrival");
    } else if (filterValue === "price-low-to-high") {
      return [...categorizedProducts].sort((a, b) => a.price - b.price);
    } else if (filterValue === "price-high-to-low") {
      return [...categorizedProducts].sort((a, b) => b.price - a.price);
    } else {
      return categorizedProducts;
    }
  }, [filterValue, categorizedProducts]);

  return (
    <section className="max-w-7xl mx-auto py-10">
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div>
          <h2 className="text-lg font-semibold">
            {displayProducts.length} Products
          </h2>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            Filters
          </button>

          <select
            className="px-4 py-2 border rounded-lg bg-white"
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
            value={filterValue}
          >
            <option value="all">All</option>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
