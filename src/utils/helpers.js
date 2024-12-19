export function calcDiscount(price, discount) {
  return (price - price * (discount / 100)).toFixed(2);
}

export function calcCountPrice({ basketDetails, basket }) {
  if (!basketDetails || !basket)
    return { itemCount: 0, totalPrice: 0, totalQuantities: 0 };

  return basketDetails?.reduce(
    (acc, item) => {
      //*math the basket items to data
      const usersQuantities = basket?.find(
        (q) => Number(q.productId) === item.id
      )?.quantity;

      const quantity = usersQuantities || item.quantity || 1;

      const discountedPrice = Number(
        calcDiscount(item.price, item.discountPercentage)
      );

      acc.itemCount += quantity; // Total items count
      acc.totalPrice += discountedPrice * quantity; // Total price
      acc.totalQuantities += quantity; // Total quantities from database or fallback

      return acc;
    },
    { itemCount: 0, totalPrice: 0, totalQuantities: 0 }
  );
}
