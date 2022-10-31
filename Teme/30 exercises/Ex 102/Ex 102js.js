// Write a JavaScript program to find the number of inversions of a given array of integers. 

const number = (arr) => {
    let x = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) 
              x++;
        }
    }
    return x;
}

console.log(number([0, 1, 2, 5, 9]));   
console.log(number([1, 10, 2, 3]));   
console.log(number([10, 10, 40, -10]));