const formattedPriceUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatPrice(price) {
  return formattedPriceUSD.format(price);
}
