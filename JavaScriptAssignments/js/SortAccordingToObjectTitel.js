var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function sortCompare(object1, object2)
{
    if(object1.title<object2.title)
        return -1;
    if(object1.title>object2.title)
        return 1;
    return 0; 
}

function sortObjectTitle(library)
{
    return library.sort(sortCompare);
}

console.log(sortObjectTitle(library));