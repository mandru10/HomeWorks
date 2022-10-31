//Write a JavaScript program to add two digits of a given positive integer of length two.  

const addTwoDigits = (digits) => {   
      return digits % 10 + Math.floor(digits / 10);
}

console.log(addTwoDigits(25))
console.log(addTwoDigits(50))