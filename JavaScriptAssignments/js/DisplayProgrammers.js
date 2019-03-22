var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];


var newObj=[];

for(var i=0;i<myObj.length;i++)
{
    if(myObj[i].occupation=="Programmer")
        newObj.push(myObj[i]);
}

var myObj1=myObj;

function sortCompare(object1, object2)
{
    if(object1.age<object2.age)
        return 1;
    if(object1.age>object2.age)
        return -1;
    return 0; 
}

console.log(newObj);
console.log();

myObj1.sort(sortCompare);

console.log(myObj1);
console.log();

var TeamLeader=[];
var Programmer=[];
var myObj2=myObj;
var list=(function arrangeOccupation(myObj){
    for(var i=0;i<myObj2.length;i++)
    {
        
        if(myObj2[i].occupation==="Team Leader")
        {
            delete(myObj2[i].occupation);
            TeamLeader.push(myObj2[i]);
        }
        else{
            delete(myObj2[i].occupation);
            Programmer.push(myObj2[i]);
        }
    }

    // for(var i=0;i<list_res1.length;i++)
    //     list_res.push(list_res[i]);
    var list_new=[];
    var teamleadAndProgrammerObj={TeamLeader,Programmer};
    // var programmerObj={};
    // teamleadObj.push(list_res);
    // programmerObj.push(list_res1);
    // list_new.push(teamleadObj);
    // list_new.push(programmerObj);

    return teamleadAndProgrammerObj;
})(myObj)

console.log(list);

var names = myObj.map(function (myObjnew) {
    return myObjnew.name;
  });

  console.log(names);