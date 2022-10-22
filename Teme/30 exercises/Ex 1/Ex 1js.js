// Write a JavaScript program to display the current day and time in the following format.  

var days = new Date();
    console.log(days);
var today = days.getDay();
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var currentDay = document.getElementById('fordate');
var currentTime = document.getElementById('fortime');

function displayDate(){
    currentDay.innerHTML = dayList[today];

}

displayDate()

function displayTime(){

    var hour = days.getHours();
    var minute = days.getMinutes();
    var seconds = days.getSeconds();

    currentTime.innerHTML = hour + ':' + minute + ':' + seconds

}   

displayTime();