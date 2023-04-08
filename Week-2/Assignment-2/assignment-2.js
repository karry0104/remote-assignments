function avg(data) {
  const avgPrice = data.products.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  return avgPrice / data.size;
}

console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
