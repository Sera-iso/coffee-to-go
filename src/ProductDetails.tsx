 import React from "react";
/*import { Fragment, useState, useEffect } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { products } from "./data/db";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const product = {
  sizes: [
    { name: "single", inStock: true },
    { name: "double", inStock: true },
  ],
  addOn: [
    {
      name: "Cocoa",
      class: "bg-yellow-900",
      selectedClass: "ring-gray-400",
      inStock: true,
    },
    {
      name: "Cinnamon",
      class: "bg-yellow-400",
      selectedClass: "ring-gray-400",
      inStock: true,
    },
    {
      name: "Milk",
      class: "bg-white",
      selectedClass: "ring-gray-900",
      inStock: true,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails({
  setShowProductDetails,
  showProductDetails,
}: {
  setShowProductDetails: (value: React.SetStateAction<boolean>) => void;
  showProductDetails: boolean;
}) {
  const [selectedAddOn, setSelectedAddOn] = useState(product.addOn[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [singleProduct, setSingleProduct] = useState();
  const { name } = useParams();
  const [showAddToBag, setShowAddToBag] = useState(false);

  useEffect(() => {
    const findProduct = () => {
      const newProduct = products.find((product) => product.name === name);
      //setSingleProduct(newProduct);
      console.log("My new Product", newProduct);
    };
    findProduct();
  }, [name]);
  console.log("you selected", singleProduct);
  console.log("I am", showAddToBag);

  return (
    <Transition.Root show={showProductDetails} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setShowProductDetails(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-black/50 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setShowProductDetails(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img
                        src={singleProduct.imageSrc}
                        alt={singleProduct.imageAlt}
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {name}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-2"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">
                          {singleProduct.price}
                        </p>
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-10"
                      >
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>
                        <form>
                          {/* Sizes 
                          <div className="mb-10">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900">
                                Quantity
                              </h4>
                            </div>

                            <RadioGroup
                              value={selectedSize}
                              onChange={setSelectedSize}
                              className="mt-4"
                            >
                              <RadioGroup.Label className="sr-only">
                                {" "}
                                Choose a size{" "}
                              </RadioGroup.Label>
                              <div className="grid grid-cols-4 gap-4">
                                {product.sizes.map((size) => (
                                  <RadioGroup.Option
                                    key={size.name}
                                    value={size}
                                    disabled={!size.inStock}
                                    className={({ active }) =>
                                      classNames(
                                        size.inStock
                                          ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                          : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                        active ? "ring-2 ring-yellow-900" : "",
                                        "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <RadioGroup.Label as="span">
                                          {size.name}
                                        </RadioGroup.Label>
                                        {size.inStock ? (
                                          <span
                                            className={classNames(
                                              active ? "border" : "border-2",
                                              checked
                                                ? "border-yellow-900"
                                                : "border-transparent",
                                              "pointer-events-none absolute -inset-px rounded-md"
                                            )}
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                          >
                                            <svg
                                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                              viewBox="0 0 100 100"
                                              preserveAspectRatio="none"
                                              stroke="currentAddOn"
                                            >
                                              <line
                                                x1={0}
                                                y1={100}
                                                x2={100}
                                                y2={0}
                                                vectorEffect="non-scaling-stroke"
                                              />
                                            </svg>
                                          </span>
                                        )}
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>
                          {/* addOn 
                          <div className="mb-10">
                            <h4 className="text-sm font-medium text-gray-900">
                              Add On
                            </h4>

                            <RadioGroup
                              value={selectedAddOn}
                              onChange={setSelectedAddOn}
                              className="mt-4"
                            >
                              <RadioGroup.Label className="sr-only">
                                {" "}
                                Choose a Add On{" "}
                              </RadioGroup.Label>
                              <div className="grid grid-cols-4 gap-4">
                                {product.addOn.map((addOn) => (
                                  <RadioGroup.Option
                                    key={addOn.name}
                                    value={addOn}
                                    className={({ active }) =>
                                      classNames(
                                        addOn.selectedClass
                                          ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                          : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                        active ? "ring-2 ring-yellow-900" : "",
                                        "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <RadioGroup.Label as="span">
                                          {addOn.name}
                                        </RadioGroup.Label>
                                        {addOn.inStock ? (
                                          <span
                                            className={classNames(
                                              active ? "border" : "border-2",
                                              checked
                                                ? "border-yellow-900"
                                                : "border-transparent",
                                              "pointer-events-none absolute -inset-px rounded-md"
                                            )}
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                          >
                                            <svg
                                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                              viewBox="0 0 100 100"
                                              preserveAspectRatio="none"
                                              stroke="currentAddOn"
                                            >
                                              <line
                                                x1={0}
                                                y1={100}
                                                x2={100}
                                                y2={0}
                                                vectorEffect="non-scaling-stroke"
                                              />
                                            </svg>
                                          </span>
                                        )}
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>

                          <Link to="/cart">
                            <button
                              type="submit"
                              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-900 py-3 px-8 text-base font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:ring-offset-2"
                              onClick={() => setShowAddToBag(true)}
                            >
                              Add to bag
                            </button>
                            {showAddToBag && (
                              <Cart
                                showAddToBag={showAddToBag}
                                setShowAddToBag={setShowAddToBag}
                              />
                            )}
                          </Link>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
{*/
