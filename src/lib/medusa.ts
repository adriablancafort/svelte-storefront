import Medusa from "@medusajs/js-sdk";

export const sdk = new Medusa({
  baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL,
  debug: import.meta.env.MODE === "development",
  publishableKey: import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY,
});