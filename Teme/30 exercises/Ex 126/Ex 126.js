//Write a JavaScript program to get the largest even number from an array of integers. 

const array = [3 , 6, 2, 56, 32, 5, 89, 32];
let largest= 0;

for (i=0; i<array.length; i++){
    if (array[i]>largest) {
        largest=array[i];
    }
}

console.log(largest);