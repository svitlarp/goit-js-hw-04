// Function that verify if conteiner is enough capacity to stok all products
function isEnoughCapacity(products, containerSize) {
  let productsTotal = 0;
  const values = Object.values(products);
  for (let item of values) {
    productsTotal += item;
  }
  return (productsTotal <= containerSize) ? true : false;
}


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 5, lime: 5, tomatoes: 4 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
