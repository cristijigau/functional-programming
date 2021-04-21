// Ex 3
const items = [1, 2, 3, 1, 4, 5, 6];

const filterOdds = items => items.filter(item => item % 2);

const multiplyByThree = items => items.map(item => item * 3);

const addFive = items => items.map(item => item + 5);

const compose = (...args) => {
  return (items) => {
    for (let i = args.length - 1; i >= 0; i--) {
      items = args[i](items);
    }
    return items;
  }
};

// [1, 2, 3, 1, 4, 5, 6] => [6, 7, 8, 6, 9, 10, 11] => [18, 21, 24, 18, 27, 30, 33] => [21, 27, 33]
console.log(compose(filterOdds, multiplyByThree, addFive)(items));