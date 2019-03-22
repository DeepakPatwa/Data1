var obj = {
    "One":"1",
    "Two":"2",
    "Three":"3",
    "Four":"4"
    }

    function generateValueArray(obj)
    {
        var values=Object.values(obj);
        return values;
    }
    
    console.log(generateValueArray(obj));