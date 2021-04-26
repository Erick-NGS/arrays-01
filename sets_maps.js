// const ids = new Set(['Erick', 'Silva', 'Mr.']);

// ids.add(2);

// ids.delete('Mr.');

// for (const entry of ids.entries()) {
//   console.log(entry);
// }

// console.log(ids);

// const person1 = { name: 'Erick' };
// const person2 = { name: 'Will' };

// const personData = new Map([[person1, [{ date: 'April 26', price: 10 }]]]);

// personData.set(person2, [{ date: 'April 23', price: 20 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

let person = { name: 'Max' };
// creates a set, but if the value of said set is no longer needed, it allows for the change of the value in the weakSet to null, for example, and makes it possible for JS garbage collector to work removing that value from memory, cleaning space in memory
const persons = new WeakSet();
persons.add(person);

// random operations

person = null;

console.log(persons);
