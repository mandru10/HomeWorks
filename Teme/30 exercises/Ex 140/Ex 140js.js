//Write a JavaScript program to check whether all the digits in a given number are the same or not. 

const digits = (num) => {
	let firstNr = num % 10;
  	while (num) {
    	if (num % 10 !== firstNr) 
    		return false;
		num = Math.floor(num / 10);
  	}
  			return true
}

console.log(digits(5678));
console.log(digits(1111));
console.log(digits(22222222));