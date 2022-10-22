// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.
//  If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

function guess(){

var me = document.getElementById('press');
var buttonPress = document.getElementById('buttonPress');

  buttonPress.addEventListener('click', function(e){
  	e.preventDefault() 

var mynumber = parseInt(me.value);
var computer = [Math.round(Math.random() * 10)];
	
    console.log('Computer : ' + computer)
        if(mynumber == computer){
	      console.log("Good Work");
	    }else {
	      console.log("Not matched");
	    }
  	})
  }

guess();