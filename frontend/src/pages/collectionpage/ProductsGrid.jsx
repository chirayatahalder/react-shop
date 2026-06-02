import ProductCard from "../../components/ProductCard";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

export default function ProductsGrid({ products }) {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const category = searchParams.get("category");

  if(category) {
    useEffect(() => {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);

    }, [category, products]);
  }
  




  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div>
          <h2 className="text-lg font-semibold">
            {filteredProducts.length} Products
          </h2>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            Filters
          </button>

          <select
            className="px-4 py-2 border rounded-lg bg-white"
            // onChange={(e) => onChangeHandler(e)}
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
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
