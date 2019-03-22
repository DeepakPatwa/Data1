var email="deepakgkp192@gmail.com";



function validateEmail() {
    var res ="no";
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase()))
        res="yes";
    return res;
}

console.log(validateEmail());

// var readline = require("readline");
// var email = readline.createInterface(process.stdin,process.stdout);
// email.question("Enter your string : ",function(input){
//     var res ="no";
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if(re.test(String(email).toLowerCase()))
//         console.log("Valid Email Address");
//     else
//         console.log("Invalid Email Address");
// });