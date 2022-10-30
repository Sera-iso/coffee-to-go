import products from "../data/db.json";
import ProductDetails from "./ProductDetails";

export default function ProductList() {
  return (
    <div className="bg-white mx-auto py-10" id="productList">
      <h2 className="mb-8 text-center font-bold tracking-tight text-gray-900 sm:text-4xl text-2xl">
        Our menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6">
        {products.map((item) => (
          <div key={item.id}>
            <ProductDetails {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
