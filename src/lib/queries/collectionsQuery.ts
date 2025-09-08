import { ShopifyData } from "../shopify";

export async function getAllCollections() {
  const query = `
     {
      collections(first: 30) {
        edges {
          node {
            id
            title
            handle
            image{
              altText
              id
              url
            }
            products(first: 10) {
              edges {
                node {
                  totalInventory
                  id
                }
              }
            }
          }
        }
      }
    }
  
  `;

  const response = await ShopifyData(query);

  const allCollections = response?.data?.collections?.edges
    ? response?.data?.collections?.edges
    : [];
 
  return allCollections;
}

export async function getProductsOfSpecificCollection(handle: string) {
  const query = `
     {
     
      collectionByHandle(handle: "${handle}") {
        title
        handle
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              totalInventory

              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 5) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
    
    `;

  const response = await ShopifyData(query);

  const allProductsOfSpecificCollection = response.data.collectionByHandle
    .products.edges
    ? response.data.collectionByHandle.products.edges
    : [];
    

  return allProductsOfSpecificCollection;
}

export async function getCollections() {
  const query = `
    
      {
      collections(first: 250) {
        edges {
          node {
            handle
            id
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const slugs = response.data.collections.edges
    ? response.data.collections.edges
    : [];

  return slugs;
}
