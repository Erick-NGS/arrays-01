const exc = [-5, 1, 4, 7, 9, 10];

const filterExc = exc.filter(num => num > 5);

console.log('Filter => ', filterExc);

const mapExc = exc.map(number => {
  const num = { num: number };
  return num;
});

console.log('Map => ', mapExc);

const reduceExc = exc.reduce(
  (prevValue, nextValue) => prevValue * nextValue,
  1
);

console.log('Filter => ', reduceExc);

const findMax = values => {
  console.log('Max number =>', Math.max(...values));
};

findMax(exc);

const findMinMax = values => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return [min, max];
};

const [min, max] = findMinMax(exc);

console.log(min, max);

const excSet = new Set();

excSet.add(1);
excSet.add(4);
excSet.add(4);

console.log(excSet);
