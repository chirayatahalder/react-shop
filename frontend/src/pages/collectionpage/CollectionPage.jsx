import ProductsGrid from "./ProductsGrid";

export default function CollectionPage({ products }) {
  return (
    <>
      {/* Collection Hero */}
      <section className="border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Collection
          </p>

          <h1 className="mt-2 text-5xl font-bold text-gray-900">
            All Products
          </h1>

          <p className="mt-4 max-w-2xl text-gray-600">
            Discover premium apparel crafted for comfort,
            versatility, and timeless style.
          </p>
        </div>
      </section>

      <ProductsGrid products={products} />
    </>
  );
}