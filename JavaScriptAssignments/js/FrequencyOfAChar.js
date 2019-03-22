var inputString='gmail.com';
var inputChar='m';

function calculateFrequency(inputString, inputChar)
{
    var resultingString=inputString.split(inputChar).join('');

    return inputString.length-resultingString.length;
}

console.log(calculateFrequency(inputString, inputChar));