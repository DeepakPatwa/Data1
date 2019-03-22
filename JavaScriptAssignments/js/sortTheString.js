var inputString="adaiefcewsadzs";

function sortArrayAsc(inputString)
{
    var inputArray=inputString.split("");
    var SortedStringAsc=inputArray.sort().toString().split(',').join('');
    return SortedStringAsc;
}

function sortArrayDesc(inputString)
{
    var inputArray=inputString.split("");
    var SortedStringDesc=inputArray.sort().reverse().toString().split(',').join('');
    return SortedStringDesc;
}

console.log(sortArrayAsc(inputString));
console.log(sortArrayDesc(inputString));