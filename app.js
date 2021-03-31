// const numbers = [1, 2, 3];
// console.log(numbers);

// const listItem = document.querySelectorAll('li');
// console.log(listItem);

// const arrayListItems = Array.from(listItem);
// console.log(arrayListItems);

const testResults = [14, 1.4, 3.14, 99, -1, -10];
const scoredResults = testResults.concat([33, 2.95]);

console.log(testResults, scoredResults);

console.log(testResults.indexOf(3.14));

const objArray = [{ name: 'Abe' }, { name: 'Bel' }];

const name = objArray.find((person, index, arrayRes) => {
  return person.name === 'Bel';
});

console.log(name);

const nameIndex = objArray.findIndex((person, index, arrayRes) => {
  return person.name === 'Abe';
});

console.log(nameIndex);
