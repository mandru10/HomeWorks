//1
console.log("Ex1")

var lastnr = 20;

for(var i = 1; i<=lastnr; i++){
    console.log(i);
}

//2
console.log("Ex2")

var lastnr = 20;

for(var i = 1; i<=lastnr; i++){
    if(i%2-1 == 0){
    console.log(i);
    }
}

//3
console.log("Ex3")

var myarray = [1,10,2,5,12,6,10,10];
var sum = 0;

for(var i = 0; i<myarray.length; i++){
    sum = myarray[i] + sum;
    
}

console.log(sum);

//4
console.log("Ex4")

var max = myarray[0];

for(var i in myarray){
    if(myarray[i] > max){
        max = myarray[i];
    }
}

console.log(max);

//5
console.log("Ex5")

var time = 10;
var count = 0;

for(var i in myarray){
    if(myarray[i] == time){
        count++;
    }
}

console.log("Numarul " + time + " apare de " + count + " ori.")

//Challenge
console.log("Challenge")

var myarray2 = [[0,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,0]];

console.log(myarray2[0]);
console.log(myarray2[1]);
console.log(myarray2[2]);
console.log(myarray2[3]);