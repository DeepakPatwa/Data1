var student=[['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

function calculateGrade(student)
{
    var averageMarks=0;

    for(var i=0;i<student.length;i++)
        averageMarks=averageMarks+student[i][1];
    
        averageMarks=(averageMarks)/student.length;

        console.log("average marks is : " + averageMarks);

        if(averageMarks<60)
            console.log("Grade F");
        else if(averageMarks<70)
            console.log("Grade D");
        else if(averageMarks<80)
            console.log("Grade C");
        else if(averageMarks<90)
            console.log("Grade B");
        else
            console.log("Grade A");
}

console.log(calculateGrade(student));