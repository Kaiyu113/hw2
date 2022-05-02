const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const array3 = itemsObject.map((ele) => ({
  quantity: ele.quantity * 2,
  price: ele.price * 2,
}));

console.log(array3);
