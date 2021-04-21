/* // Ex.1
const fibonacci = number => {
  if (number > 1) return fibonacci(number - 1) + fibonacci(number - 2);
  return number;
};

console.log(fibonacci(7));

//Ex.2

const items = [1, 2, 3, 1, 4, 5, 6];

console.log('initial items array: ' + items);

//map

console.log('map result:');

const map = (arr, callback) => {
  return arr.reduce((acc, el, index) => {
    acc[index] = callback(el, index, arr);
    return acc;
  }, []);
};

console.log(map(items, x => x * 2)); // [2, 4, 6, 2, 8, 10, 12]

//filter

console.log('filter result:');

const filter = (arr, callback) => {
  return arr.reduce((acc, el, index) => {
    if (callback(el, index, arr)) return [...acc, el];
    return acc;
  }, []);
};

console.log(filter(items, item => item > 3)); // [4, 5, 6]

//every

console.log('every result:');

const isBelowThree = currentValue => currentValue < 3;

const every = (arr, callback) => {
  return arr.reduce((acc, el, index) => {
    if (!callback(el, index, arr)) return false;
    return acc;
  }, true);
};

console.log(every(items, isBelowThree)); // false
console.log(every(items, item => item < 16)); // true

//some

console.log('some result:');

const some = (arr, callback) => {
  return arr.reduce((acc, el, index) => {
    if (callback(el, index, arr)) return true;
    return acc;
  }, false);
};

console.log(some(items, isBelowThree)); // true
console.log(some(items, item => item > 16)); // false

//find

console.log('find result:');

const find = (arr, callback) => {
  return arr.reduce((acc, el, index) => {
    if (callback(el, index, arr)) acc = [...acc, el];
    return acc;
  }, [])[0];
};

console.log(find(items, item => item > 3)); // 4
console.log(find(items, item => item > 16)); // undefined

//indexOf

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log('indexOf result:');

const indexOf = (arr, searchElement, fromIndex) => {
  if (fromIndex >= arr.length) return -1;
  else if (fromIndex < 0) fromIndex = fromIndex + arr.length;
  const result = arr.reduce((acc, el, index) => {
    if (index >= fromIndex) {
      if (el === searchElement) {
        return [...acc, index];
      } else return acc;
    } else return acc;
  }, [])[0];
  return result ? result : -1;
};

console.log(indexOf(beasts, 'duck', -4)); // 3
console.log(indexOf(beasts, 'camel', 0)); // 2
console.log(indexOf(items, 16, 1)); // -1
console.log(indexOf(items, 1, 8)); // -1

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
 */