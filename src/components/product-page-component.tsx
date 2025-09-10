"use client";
import { CartContext } from "../context/shopContext";
import ProductOptions from "./variant-options";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";

import { ShoppingBag } from "lucide-react";
import { getProductsInHomePage } from "../lib/queries/productsQuery";

interface ProductPageProps {
  product: any; // In a real app, you'd use a proper type here
}

export default function ProductPage({ product }: ProductPageProps) {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProducts = async () => {
      const response = await getProductsInHomePage();

      const cleaned = response.map(({ node }: any) => {
        const metafieldsObj: any = {};
        node.metafields.forEach(({ key, value }: any) => {
          // if (["shortdescription"].includes(key)) {
          //   metafieldsObj[key] = cleanMetafieldArray(value);
          // } else {
          //   metafieldsObj[key] = value;
          // }
        });

        return {
          id: node.id,
          title: node.title,
          handle: node.handle,
          price: node.priceRange.minVariantPrice.amount,
          image: node.images.edges[0]?.node.originalSrc ?? null,
          // metafields: metafieldsObj,
          totalInventory: node.totalInventory,
          tags: node.tags,
        };
      });
      setAllProducts(cleaned);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  function cleanMetafieldArray(value: any) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed.map((item) => item.trim()) : [];
    } catch {
      return [];
    }
  }

  function transformProduct(product: any) {
    const metafieldsObj: any = {};

    // product.metafields.forEach(({ key, value }: any) => {
    //   if (["shortdescription"].includes(key)) {
    //     metafieldsObj[key] = cleanMetafieldArray(value);
    //   } else {
    //     metafieldsObj[key] = value;
    //   }
    // });

    return {
      id: product.id,
      title: product.title,
      handle: product.handle,
      description: product.description,
      image: product.images.edges[0]?.node.originalSrc ?? null,
      // metafields: metafieldsObj,
      price: product.priceRange.minVariantPrice.amount,
    };
  }
  const transformed = transformProduct(product);

  const { addToCart }: any = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allVariantOptions = product.variants.edges?.map((variant: any) => {
    const allOptions: any = {};

    variant.node.selectedOptions.map((item: any) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.src,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.price.amount,
      variantQuantity: quantity,
    };
  });

  const defaultValues: any = {};
  product.options.map((item: any) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name: any, value: any) {
    setSelectedOptions((prevState: any) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item: any) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  const sizeOrder = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

  function sortSizes(values: string[]) {
    return [...values].sort(
      (a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b)
    );
  }
  console.log(product);

  // const recommendedProducts = allProducts.filter(
  //   (product: any) => product.id !== transformed.id
  // );

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="flex flex-col  space-y-6">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
              <Image
                src={
                  product.images.edges[activeImageIndex]?.node.originalSrc ||
                  "/placeholder.svg"
                }
                alt={transformed.title}
                fill
                className="object-cover"
              />

              {product.images.edges.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/85 hover:bg-white rounded-full shadow-md border border-[#e9e2d8] text-[#2c2c2c] hover:text-[#c9a87c] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c9a87c]"
                    onClick={() =>
                      setActiveImageIndex((prevIndex) =>
                        prevIndex === 0
                          ? product.images.edges.length - 1
                          : prevIndex - 1
                      )
                    }
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/85 hover:bg-white rounded-full shadow-md border border-[#e9e2d8] text-[#2c2c2c] hover:text-[#c9a87c] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c9a87c]"
                    onClick={() =>
                      setActiveImageIndex((prevIndex) =>
                        prevIndex === product.images.edges.length - 1
                          ? 0
                          : prevIndex + 1
                      )
                    }
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-3xl font-serif font-light text-[#2c2c2c] mb-2">
              {transformed.title}
            </h1>
            {/* Price */}
            <div className="mb-6">
              <span className="text-2xl font-medium text-[#2c2c2c]">
                ${transformed.price}
              </span>
            </div>

            <div className="mb-6">
              {/* <h3 className="text-sm font-medium text-[#5c5c5c] mb-2">Size:</h3> */}
              {product.options.map(({ name, values }: any) => (
                <ProductOptions
                  key={`key-${name}`}
                  name={name}
                  // values={values}
                  values={name === "Size" ? sortSizes(values) : values} // ✅ sorted only for Size
                  selectedOptions={selectedOptions}
                  setOptions={setOptions}
                />
              ))}
            </div>
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-[#5c5c5c] mb-2">
                Quantity:
              </h3>
              <div className="flex items-center">
                <button
                  className="w-10 h-10 border border-gray-200 rounded-l-md flex items-center justify-center bg-white"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <div className="w-12 h-10 border-t border-b border-gray-200 flex items-center justify-center bg-white">
                  {quantity}
                </div>
                <button
                  className="w-10 h-10 border border-gray-200 rounded-r-md flex items-center justify-center bg-white"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => {
                  addToCart(selectedVariant, quantity);
                }}
                className="text-white px-5 py-2 bg-[linear-gradient(90.51deg,#6eaf4c_0.42%,#b7d349_99.54%)] flex"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
