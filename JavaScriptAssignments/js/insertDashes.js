// 025468 the output should be 0-254-6-8?

var number="025468";

function dashedNumber(number)
{
    var resultingString="";
    var leftvalue=number.charAt(0);
    var u=number.length;
    resultingString=leftvalue;
    for(var i=1;i<number.length;i++)
    {
        if(leftvalue%2==0 && number.charAt(i)%2==0)
            resultingString=resultingString+"-"+number.charAt(i);
        else
            resultingString=resultingString+number.charAt(i);
        leftvalue=number.charAt(i);
    }
    return resultingString;
}

console.log(dashedNumber(number));