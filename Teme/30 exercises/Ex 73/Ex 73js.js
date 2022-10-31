//Write a JavaScript program to reverse the elements of a given array of integers length 3.  

const reverse = (array) => {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
}

console.log(reverse([1, 20, 100])); 
console.log(reverse([87, 0, -1]));  
console.log(reverse([10223, 4, -10]));