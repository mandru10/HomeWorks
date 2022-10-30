//Write a JavaScript program to convert a given number to hours and minutes.  

const timeConvert = (num) => {
 
  let hours = Math.floor(num / 60);  
  let minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(timeConvert(250));