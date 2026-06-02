export default function Newsletter() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="border rounded-2xl p-10 text-center bg-gray-50">
        <h2 className="text-3xl font-bold">Stay Updated</h2>

        <p className="mt-4 text-gray-600">
          Be the first to know about new arrivals, seasonal collections, and
          exclusive offers.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-md px-4 py-3 sm:w-80"
          />

          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
