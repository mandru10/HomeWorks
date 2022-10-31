//Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one. 

const thirdNumber = (a, b, c) => {
   if((a!==b) && (a!==c) && (b!==c))
    return "Unequal";
	if(a==b) return c;
	if(a==c) return b;
	return a;
}

console.log(thirdNumber(10,10,11));
console.log(thirdNumber(14,13,22));
console.log(thirdNumber(100,100,3));