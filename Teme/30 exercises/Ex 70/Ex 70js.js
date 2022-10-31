//Write a JavaScript program to rotate the elements left of a given array of integers of length 3.  

const rotateElements = (x) => {
  return [x[1], x[2], x[0]];
};
console.log(rotateElements([12, 2, 100]));
console.log(rotateElements([0, -1, 0]));
console.log(rotateElements([7, 6, 100])); 