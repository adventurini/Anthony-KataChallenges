function dirReduc(arr){
    // ...
var len=arr.length;
    //Strategy: iterate over the entire array, while iterating over each item.
        //Look for North/ South, East/ West pairs. Delete if there is a match.
            //reset both i and j
    for (i=0; i<len; i++){
        if (arr[i]){
        var x =arr[i].toLowerCase();
        }
        console.log(arr[i+1]);
        if (arr[i+1]){
        var y=arr[i+1].toLowerCase();
            }
            console.log(x, y);
            if ((x === "north" && y ==="south") 
            || (x === "east" && y ==="west")
            || (x === "south" && y ==="north")
            || (x === "west" && y ==="east"))
            {   
                console.log(arr)
                arr.splice(i+1, 1);
                console.log(arr)
                arr.splice(i, 1);
                console.log(arr)
                console.log(i, i+1)
                len=len-2;
                i=-1;
                console.log(i,i+1)
            }       
    }
    console.log(x)
    console.log(arr)
    return arr;
  }

console.log((dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])))
// Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))
