var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);
rl.question("Enter your string : ",function(input){
   var num = input.split(" ");
   console.log("The ascending output is : "+num.sort());
   console.log("The descending output is : "+num.sort().reverse())
});