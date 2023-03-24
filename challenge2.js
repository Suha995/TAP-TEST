const missingNumber = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr.indexOf(i) === -1) {
      return i;
    }
  }
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([0, 1]));
