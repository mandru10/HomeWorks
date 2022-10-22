//Write a JavaScript program to count the number of vowels in a given string. 

var vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str){

    var count = 0
    var string = str.toString();

        for(var i = 0; i<= string.length - 1; i++){
        for(var j = 0; j<= vowels.length - 1; j++){  
            if (string[i] === vowels[j]){
                count ++;
 
  	    }
    }
}

return count;

}

console.log(countVowels('This is the result'));