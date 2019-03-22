var inputString='webmaster';

function sortAlphabetically(inputString)
{
    var inputArray=inputString.split("");
    var SortedStringAsc=inputArray.sort().toString().split(',').join('');
    return SortedStringAsc;

}

console.log(sortAlphabetically(inputString));