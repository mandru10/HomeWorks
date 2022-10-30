//Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive. 

const range = (a, b) => {
  if ((a >= 40 && a <= 60 && b >= 40 && b <= 60) || (a >= 70 && a <= 100 && b >= 70 && b <= 100))
     {
    return true;
     } 
    else 
     {
    return false;
  }
}

console.log(range(20, 50));
console.log(range(72, 93));
console.log(range(2, 90));