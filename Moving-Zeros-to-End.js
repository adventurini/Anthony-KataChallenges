var moveZeros = function (arr) {
    // TODO: Program me
    var index = [];
    count=0;
    //push each index @ 0 to a new array
    for (i=0; i<arr.length; i++){
        if(arr[i]===0){
            index.push(i+count);
            //remove each 0 and reduce i
            arr.splice(i,1);
            i=i-1;
            count++; //need to also increase the index that is being pushed to the array
        }
        console.log(index);
    }
    for (j=0; j<index.length; j++){
        arr.push(0);
    }
    console.log(arr)
    return arr;
    //push 0s back into old array
  }


  console.log(moveZeros([1,0,3,4,0,'q','b',0,3]))