import { medusaApi } from "$lib/medusa";

export async function load({ fetch }) {
  const products = await medusaApi(fetch, "products");
  return { products };
}
