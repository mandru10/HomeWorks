//Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.  

const maxRange = (a, b) => {	
if( (a >= 40) && (a <= 60) && (b >= 40 && b <= 60) ){
if(a === b){
	return "Same number";
}else if (a > b){
	return a;
}else{
	return b;
}
}else{
	return "Doesn't fit";
}
}

console.log(maxRange(45, 48));
console.log(maxRange(10, 90));