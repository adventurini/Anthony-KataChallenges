function pigIt(str){
      //Split the string at spaces
    var word = str.split(' ');
    var reg1= /[!?><:"{})(*&^%$#@!)]/;
    var holder;
    //array to store the character at index[0] of each word
    var index =[];
    //array to store the finishing string >> will need to be joined at the end
    var result=[];
    let theMatch;
    for (i=0; i<word.length; i++){
        let string1=word[i];
        index.push(string1[0]);
        holder=string1;
        console.log(holder)
        var gen = [];
        if(string1.match(reg1)){
            holder = string1.replace(reg1, '').split('');
            console.log(holder)
            console.log(string1)
        }
        console.log(index)
        
        //remove the character from each word at index[0]
        // gen.splice(0, 1);
         //iterate over each word and store each word[0], then splice it off
          //add back the word to the end of the word, and join with 'ay'
            //use template literals to add the character at the index, as well as 'ay'
            console.log(index[i])
            if(string1.match(reg1) && string1.length!==1){
                for (j=0; j<string1.length; j++){
                    let matched=string1[j];
                if(matched.match(reg1)){
                    theMatch=string1[j];
                    holder.splice(0,1);
                    holder.push(index[i]);
                    holder= `${holder},a,y,${theMatch}`;
                    console.log(holder)
                }
                }
            }
            else if(string1.length===1 && string1.match(reg1)){
                holder=string1;
            }
            else{
                holder=holder.split('');
                console.log(holder);
                holder.splice(0,1);
                holder.push(index[i]);
                holder= `${holder},a,y `;
            }
            gen.push(`${holder}`);

          //Turn words into pig latin

        result.push(gen);
    }
    console.log(result.join().replace(/,/g,""));
    return result.join().replace(/,/g,"").trim();
  }


  pigIt('O Pig latin is cool !');