import React from "react";
//import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "./data/db";
//import ProductDetails from "./ProductDetails";
export default function ProductList() {
  // const [showProductDetails, setShowProductDetails] = useState(false);
  return (
    <div className="bg-white" id="productList">
      <div className="mx-auto py-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-2xl">
            Our menu
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map(({ id, name, price, imageSrc, imageAlt }) => (
            <div key={id} className="group">
              <Link to={`/${name}`}>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="group-hover:opacity-75"
                  //   onClick={() => setShowProductDetails(true)}
                />
              </Link>

              <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
            </div>
          ))}
          {/*{showProductDetails && (
            <ProductDetails
              showProductDetails={showProductDetails}
              setShowProductDetails={setShowProductDetails}
            />
          )}*/}
        </div>
      </div>
    </div>
  );
}
