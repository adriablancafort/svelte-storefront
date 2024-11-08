<script>
  let { data } = $props();
  let products = $derived(data.products);
</script>

<h1>Products</h1>

{#each products.products as product}
<div>
  <img src={product.thumbnail} alt="Product">
  <h2>{product.title}</h2>
  <p>{product.price}</p>
</div>

    
{/each}