<script module>
  import { sdk } from "$lib/medusa";
  let products = sdk.admin.product.list();
</script>

<h1>Products</h1>

{#each products as product}
    Title: {product.title}
{/each}