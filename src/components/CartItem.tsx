import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"
import { useShoppingCart } from "../context/ShoppingCartContext"
import products from "../data/db.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number,
    quantity: number
}

export default function CartItem({ id, quantity }: CartItemProps) {
    const {decreaseCartQuantity, cartQuantity, closeCart} = useShoppingCart()
    const product = products.find(product => product.id === id)
    if (product == null) return null

return (
    <div className="flow-root mt-10">
        <ul className="-my-6 divide-y divide-gray-200">
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden">
            <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
            />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
            <div>
                <div className="flex items-center justify-between text-gray-900">
                <h3 className= "text-base font-medium">{product.name}</h3>
                <p className="text-xs text-gray-500">x{quantity}</p>
                <p className="text-base font-medium ml-4">{formatCurrency(product.price * quantity)}</p>
                </div>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
                <div className="flex">
                <button
                    onClick={cartQuantity > 0 ? () => decreaseCartQuantity(id) : () => closeCart()}
                    type="button"
                    className="font-medium text-yellow-900 hover:text-yellow-700"
                >
                    Remove
                </button>
                </div>
            </div>
            </div>
        </li>
        </ul>
    </div>
)
}