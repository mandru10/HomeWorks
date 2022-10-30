//52. Write a JavaScript program to convert the letters of a given string in alphabetical order.  

const order = (str) => {
  return str.split("").sort().join("");
};

console.log(order("javascript"));
