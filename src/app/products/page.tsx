"use client";
import { useState, useEffect } from "react";
import { getProductsInHomePage } from "../../lib/queries/productsQuery";

import Container from "../../components/ui/container";
export default function allProductsPage() {
  const [allProducts, setallProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await getProductsInHomePage();

      const cleaned = response.map(({ node }: any) => {
        return {
          id: node.id,
          title: node.title,
          handle: node.handle,
          price: node.priceRange.minVariantPrice.amount,
          image: node.images.edges[0]?.node.originalSrc,
          totalInventory: node.totalInventory,
          tags: node.tags,
        };
      });
      setallProducts(cleaned);
      setLoading(false);
    };

    fetchAllProducts();
  }, []);

  return (
    <>
      <Container>
        {/*
         <h2 className=" py-36 text-[36px] lg:text-[44px] font-medium leading-[100%] tracking-[-1.32px] bg-clip-text text-transparent text-white bg-gradient-to-r from-[#F0F0F0] to-[#767676] mb-4 lg:mb-6">
          Our Products
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
          id="product-grid"
        >
          {allProducts.map((product: any) => (
            <div
              key={product.id}
              className="relative product-card group cursor-pointer"
            >
              <div
                className="inner-product-card relative flex flex-col justify-end slide p-0 w-full max-w-[440px] h-[500px] md:h-[600px] border border-solid border-[#2a2a2a] rounded-[32px] overflow-hidden transition-all duration-500"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative z-10 flex flex-col justify-between text-white p-[24px] lg:p-8 rounded-[32px] h-full">
                  <div className="flex justify-between items-start">
                    <span className="text-[16px] font-normal leading-[135%] text-white flex items-center gap-2">
                      ${product.price}
                    </span>
                  </div>

                  <div className="flex flex-col gap-[24px]">
                    <h3 className="text-lg font-semibold text-white">
                      <a
                        href={`/products/${product.handle}`}
                        className="text-[28px] font-medium leading-[135%] tracking-[-0.84px] gradient-heading bg-gradient-to-r from-white to-[#767676] bg-clip-text text-transparent"
                      >
                        {product.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {allProducts.map((product: any) => (
            <div
              key={product.id}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="h-56 w-full">
                <a href={`/products/${product.handle}`}>
                  <img className="mx-auto h-full" src={product.image} alt="" />
                </a>
              </div>
              <div className="pt-6">
                <a
                  href={`/products/${product.handle}`}
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  {product.title}{" "}
                </a>

                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 text-yellow-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                    </svg>

                    <svg
                      className="h-4 w-4 text-yellow-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                    </svg>

                    <svg
                      className="h-4 w-4 text-yellow-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                    </svg>

                    <svg
                      className="h-4 w-4 text-yellow-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                    </svg>

                    <svg
                      className="h-4 w-4 text-yellow-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                    </svg>
                  </div>

                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    5.0
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    (455)
                  </p>
                </div>

                <ul className="mt-2 flex items-center gap-4">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                      />
                    </svg>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Fast Delivery
                    </p>
                  </li>

                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Best Price
                    </p>
                  </li>
                </ul>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                    ${product.price}{" "}
                  </p>
                  <a href={`/products/${product.handle}`}>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary-800 focus:outline-none "
                    >
                      <svg
                        className="-ms-2 me-2 h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                        />
                      </svg>
                      Add to cart
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
