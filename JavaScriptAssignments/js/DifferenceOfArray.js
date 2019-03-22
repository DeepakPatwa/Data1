var arr1=[1,2,3,4,5];
var arr2=[5,4,5,2,1];

function ArrayDifference(arr1, arr2)
{
    var arr=[];
    for(var i=0;i<arr1.length;i++)
    {
        arr.push(arr1[i]-arr2[i]);
    }
    return arr;
}

console.log(ArrayDifference(arr1, arr2));