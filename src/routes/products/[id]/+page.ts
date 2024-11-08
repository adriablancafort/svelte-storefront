import { medusa } from "$lib/medusa";

export async function load({ fetch, params }) {
  const { id } = params;
  const response = await medusa(fetch, `products/${id}`);
  return { response };
}
