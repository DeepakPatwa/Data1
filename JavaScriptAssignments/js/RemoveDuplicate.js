var inputArray=["yo", "go", "cs", "yo", "it"];

function removeDuplicate(inputArray)
{
    var resultingArray=[];
    var set = new Set();
    for(var element of inputArray)
    {
        if(set.has(element)==false)
        {
            resultingArray.push(element);
            set.add(element);
        }
    }
    return resultingArray;
}

console.log(removeDuplicate(inputArray));