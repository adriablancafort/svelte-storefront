export async function medusaApi(fetch, endpoint) {
  const baseUrl = import.meta.env.VITE_MEDUSA_BACKEND_URL;
  const publishableKey = import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY;

  const response = await fetch(`${baseUrl}/store/${endpoint}`, {
    credentials: "include",
    headers: {
      "x-publishable-api-key": publishableKey,
    },
  });

  return response.json();
}
