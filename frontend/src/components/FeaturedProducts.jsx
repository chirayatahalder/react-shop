import ProductCard from "./ProductCard";

export default function FeaturedProducts({ products }) {
  const newProduct = products.filter((product) => product.featured === true);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Products
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
