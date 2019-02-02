function mxdiflg(a1, a2) {
    let q = 0;
       if (a1.length === 0 || a2.length===0){
           return -1;
       }
    for (i=0; i< a1.length; i++){
        for (j=0; j<a2.length; j++){
            if (q<Math.abs(a1[i].length-a2[j].length)){
                q=Math.abs(a1[i].length-a2[j].length);
            }
    }
}
    return q;
}

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) // 13