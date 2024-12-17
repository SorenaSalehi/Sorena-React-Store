export async function getAllProducts() {
  try {
    const response = [
      "mens-shoes",
      "mens-watches",
      "mens-shirts",
      "womens-shoes",
      "womens-watches",
      "womens-dresses",
    ].map((category) =>
      fetch(`https://dummyjson.com/products/category/${category}`).then(
        (res) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch category: ${category}`);
          }
          return res.json();
        }
      )
    );

    // Wait for all requests to complete
    const results = await Promise.all(response);

    return results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getOneProduct(category) {
  console.log(category);
  if (!category) return;

  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );

  if (!res.ok) throw new Error(`Failed to fetch category: ${category}`);
  const data = await res.json();
  return data;
}

export async function getProductById(id) {
  if (!id) return;

  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) throw new Error(`Failed to fetch category: ${category}`);
  const data = await res.json();
  return data;
}

export async function getAllProductsById(ids) {
  if (!ids) return;

  try {
    const res = ids?.map((id) =>
      fetch(`https://dummyjson.com/products/${id}`).then((res) => {
        if (!res.ok) {
          throw new Error("failed to fetch Products!!");
        }
        return res.json();
      })
    );

    const results = await Promise.all(res);

    return results;
  } catch (err) {
    throw new Error(err.messages);
  }
}
