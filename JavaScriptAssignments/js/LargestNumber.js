const numArray=[-1,3,9,-7,-50];


function maxNumber(numArray)
{
    var max=numArray[0];
    for(var element of numArray)
    {
        if(element>max)
            max=element;
    }
    return max;
}

console.log(maxNumber(numArray));