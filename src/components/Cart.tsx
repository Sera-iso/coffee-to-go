import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import products from "../data/db.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export default function Cart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, cartQuantity } = useShoppingCart();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          My Order
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={closeCart}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      {cartQuantity === 0 ? (
                        <div>
                          <p className="text-gray-400">
                            Your cup is empty. Refill it!
                          </p>
                        </div>
                      ) : (
                        <div>
                          {cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>
                          {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                              const product = products.find(
                                (product) => product.id === cartItem.id
                              );
                              return (
                                total +
                                (product?.price || 0) * cartItem.quantity
                              );
                            }, 0)
                          )}
                        </p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#productList"
                          className="flex items-center justify-center rounded-md border border-transparent bg-yellow-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-yellow-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button onClick={closeCart}>
                            <NavLink
                              to="/"
                              className="font-medium text-yellow-900 hover:text-yellow-700"
                            >
                              back to the menu
                            </NavLink>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
