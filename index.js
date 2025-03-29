function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key], key, collection);
      }
    }
  }
  return collection;
}

function myMap(collection, callback) {
  let newArr = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      newArr.push(callback(collection[i], i, collection));
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        newArr.push(callback(collection[key], key, collection));
      }
    }
  }
  return newArr;
}

function myReduce(collection, callback, acc) {
  let values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  let startIndex = 0;

  if (acc === undefined) {
    acc = values[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }
  return acc;
}

function myFind(collection, predicate) {
  for (let key in collection) {
    if (predicate(collection[key])) return collection[key];
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let result = [];
  for (let key in collection) {
    if (predicate(collection[key])) result.push(collection[key]);
  }
  return result;
}

function mySize(collection) {
  return Array.isArray(collection)
    ? collection.length
    : Object.keys(collection).length;
}

function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(obj) {
  return Object.keys(obj);
}

function myValues(obj) {
  return Object.values(obj);
}
