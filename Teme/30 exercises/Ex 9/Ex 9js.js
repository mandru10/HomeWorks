//Write a JavaScript program to calculate days left until next Christmas. 

var days = new Date();
var today = days.getDate();
var christmasYear = days.getFullYear();

    if (days.getMonth === 12 && today > 25){
        christmasYear = christmasYear + 1;
    }

var christmasDate = new Date(christmasYear, 11, 25);
var oneDay = 1000 * 60 * 60 * 24;

var daysLeft = Math.ceil((christmasDate - days) / (oneDay));

console.log('Days until Christmas : ' + daysLeft);