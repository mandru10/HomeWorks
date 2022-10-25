//Write a JavaScript program to find the longest string from a given array. 

function longestString(string) {
const str = string.split(" ");
let longest = 0;
let word = 0;
	
  for(var i = 0; i < str.length; i++) {
  	if(longest < str[i].length) {
    	longest = str[i].length;
      word = str[i];
     }
}
    return word;
}

console.log(longestString('JavaScript often abbreviated as JS'));
