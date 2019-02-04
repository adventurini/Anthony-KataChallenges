function validParentheses(parens){
    //TODO 
    console.log(parens)
    let x=parens.replace(/\s/g, '');
    console.log(x);
    var openCount=0;
    var closedCount=0;
    if(x[0]===')' || x.length%2===1 || x[x.length-1]==='('){
        return false;
    }
    var arr= x.split('');
    console.log(arr[0])
    for (i=0; i<arr.length; i++){
    if(arr[i]==='('){
        openCount++;
        console.log(openCount);
    }
    else{
        closedCount++;
    }
    if (closedCount>openCount){
        return false;
    }
}
    openCount=0;
    closedCount=0;
    for (j=arr.length-1; j>0; j--){
        if(arr[j]==='('){
            openCount++;
            console.log(openCount);
        }
        else{
            closedCount++;
        }
        if (closedCount<openCount){
            return false;
    }
}
  return true;
}

console.log(validParentheses(`()()`)===true)