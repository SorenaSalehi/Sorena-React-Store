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
