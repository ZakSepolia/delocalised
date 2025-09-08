import ProductPage from "../../../components/product-page-component";
import { getProduct } from "../../../lib/queries/productsQuery";
import { notFound } from "next/navigation";

// This would typically come from a database or API

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Find the product by slug

  const product = await getProduct(params.slug);

  console.log(product);
  

  // If product not found, return 404
  if (!product) {
    notFound();
  }

  return (
    <>
      {" "}
      <ProductPage product={product} />
    </>
  );
}
