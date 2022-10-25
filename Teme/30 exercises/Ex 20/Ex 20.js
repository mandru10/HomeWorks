//Write a JavaScript program to check from two given integers, whether one is positive 
//and another one is negative.  


let check = (a, b) => {

if(a > 0 && b > 0 || a < 0 && b < 0){
	return ('Same sign integers');

}else{
	return ('One is positive and another one is negative');

 }
}

console.log(check(-10, 10));
console.log(check(10, 10));
console.log(check(-10, -2));