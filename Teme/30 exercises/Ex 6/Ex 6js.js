//Write a JavaScript program to determine whether a given year is a leap year in the 
//Gregorian calendar. 

function leapYearCheck(yr){
   
    if(yr % 100 === 0){

        return(yr % 400 === 0);
    
    }else{
    
        return(yr % 4 ===0);
    }

}

console.log(leapYearCheck(1996));
console.log(leapYearCheck(2004));
console.log(leapYearCheck(1920));
console.log(leapYearCheck(200));	