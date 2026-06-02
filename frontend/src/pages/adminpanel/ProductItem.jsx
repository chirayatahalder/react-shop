export default function ProductItem({ product, deleteHandler, editHandler }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-20 w-20 rounded-3xl object-cover"
          />
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-slate-900">
              {product.title}
            </h3>
            <p className="text-sm text-slate-500">{product.category}</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-slate-900">
                ${product.price}
              </span>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
                {product.badge}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            onClick={() => {
              editHandler(`/admin/edit/${product.id}`);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-2xl bg-rose-500 px-4 text-sm font-semibold text-white transition hover:bg-rose-600"
            onClick={() => {
              deleteHandler(product.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
