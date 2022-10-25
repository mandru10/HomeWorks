//Write a JavaScript program to test whether a given integer is greater than 15 return the given number, otherwise return 15.

const x = (number) => {

    if(number > 15){
        return number;
    }else{
        return 15;
    }

}

console.log(x(100));