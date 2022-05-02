const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const array3 = itemsObject.filter((ele) => {
  return ele.price > 300 && ele.quantity > 2;
});

console.log(array3);
