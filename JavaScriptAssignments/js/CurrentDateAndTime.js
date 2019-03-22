// get a new date (locale machine date time)
var date = new Date();
// get the date as a string
var m= date.toLocaleDateString();
// get the time as a string
var time = date.toLocaleTimeString();

// log the date in the browser console
console.log('date:', m);
// log the time in the browser console
console.log('time:',time);

