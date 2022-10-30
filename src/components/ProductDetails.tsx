import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails({
  id,
  name,
  price,
  imageSrc,
  imageAlt,
}: ProductProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <>
      <div className="grid grid-cols-1 gap-y-8">
        <div className="aspect-w-2 aspect-h-3 overflow-hidden bg-gray-100 sm:col-span-4 lg:col-span-5">
          <img src={imageSrc} alt={imageAlt} className="object-cover" />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{name}</h2>
          <p className="text-lg text-gray-900 mt-2">{formatCurrency(price)}</p>
          {quantity === 0 ? (
            <button
              type="submit"
              onClick={() => increaseCartQuantity(id)}
              className="mt-6 rounded-md bg-yellow-900 py-3 px-8 text-base font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:ring-offset-2"
            >
              Add to cart
            </button>
          ) : (
          <div className="mt-6 flex items-center justify-between">
            <button onClick={() => decreaseCartQuantity(id)} className="rounded-md bg-yellow-900 py-3 px-8 text-base font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:ring-offset-2">
              -
            </button>
            <span className="mx-4">{quantity} in cart</span>
            <button onClick={() => increaseCartQuantity(id)} className="rounded-md bg-yellow-900 py-3 px-8 text-base font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:ring-offset-2">
              +
            </button>
          </div>)}
        </div>
      </div>
    </>
  );
}
