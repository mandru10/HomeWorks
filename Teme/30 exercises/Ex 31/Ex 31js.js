// Write a JavaScript program to find the largest of three given integers.  

const myArray = [1004, 3000, 100000];

function maxNumber(){

let max = 0

for(var i = 0; i<= myArray.length; i++){
    if(myArray[i] > max){
        max = myArray[i];
    }
}

return max;
}

console.log(maxNumber());