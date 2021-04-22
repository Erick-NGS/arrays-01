// const numbers = [1, 2, 3];
// console.log(numbers);

// const listItem = document.querySelectorAll('li');
// console.log(listItem);

// const arrayListItems = Array.from(listItem);
// console.log(arrayListItems);

// const testResults = [14, 1.4, 3.14, 99, -1, -10];
// const scoredResults = testResults.concat([33, 2.95]);

// console.log(testResults, scoredResults);

// console.log(testResults.indexOf(3.14));

// const objArray = [{ name: 'Abe' }, { name: 'Bel' }];

// const name = objArray.find((person, index, arrayRes) => {
//   return person.name === 'Bel';
// });

// console.log(name);

// const nameIndex = objArray.findIndex((person, index, arrayRes) => {
//   return person.name === 'Abe';
// });

// console.log(nameIndex);

// const prices = [10.99, 5.99, 3.95, 6.69];

// const tax = 0.19;

// const taxPrices = [];

// // for (const price of prices) {
// //   taxPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxPrice: price * (1 + tax) };
//   taxPrices.push(priceObj);
// });

// console.log(taxPrices);

const prices = [10.99, 5.99, 3.95, 6.69];

const tax = 0.19;

const taxPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxPrice: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxPrices);

const sortedPrices = prices.sort((n1, n2) => {
  if (n1 > n2) {
    return 1;
  } else if (n1 === n2) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices.reverse());

const filteredPrices = prices.filter(price => price > 6);

console.log(filteredPrices);

const sum = prices.reduce((prevValue, currValue) => prevValue + currValue, 0);

console.log(sum);
