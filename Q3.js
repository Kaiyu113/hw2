const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const array3 = itemsObject
  .map((ele) => {
    return ele.quantity * ele.price;
  })
  .reduce((acc, value) => {
    return acc + value;
  }, 0);

console.log(array3);
