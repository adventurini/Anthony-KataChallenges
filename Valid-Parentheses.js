function validParentheses(parens){
    //TODO 

    //strategy: replace white space, count how many (, then count how many ), reverse the counts from the other side
    //return true
    
    let arr=parens.replace(/\s/g, '');
    var openCount=0;
    var closedCount=0;
    for (i=0; i<arr.length; i++){
    if(arr[i]==='('){
        openCount++;
    }
    else{
        closedCount++;
    }
    if (closedCount>openCount){
        return false;
    }
}
    for (j=arr.length-1; j>0; j--){
        if(arr[j]==='('){
            openCount++;
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