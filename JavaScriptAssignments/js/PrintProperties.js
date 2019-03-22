var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

function getProperties(student)
{
    if (Object.keys) return Object.keys(student);
}

console.log(getProperties(student));