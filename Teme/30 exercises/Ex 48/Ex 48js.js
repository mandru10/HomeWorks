//Write a JavaScript program to reverse a given string.  

const reverseString = (string) => {
  
    return string.split("").reverse().join("");
};

console.log(reverseString("Python"));
console.log(reverseString("www"));
console.log(reverseString("JavaScript"));
