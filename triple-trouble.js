// https://www.codewars.com/kata/triple-trouble-1/train/javascript

function tripledouble(num1, num2) {
    //code me
let a = num1.toString();
let b = num2.toString();
    for (i=1; i<a.length; i++){
        if (a[i]===a[i-1] && a[i]===a[i+1]){
            let x=a[i];
            console.log(x)
            for (j=0; j<b.length; j++){
                if (b[j]=== b[j+1]){
                    if (b[j] === x){
                    return 1;
                    }
                }
            }
        }
    }
        
return 0;
  }


    // tripledouble(451999277, 41177722899)
    tripledouble(451999277,41177722899)
//     Test.assertEquals(tripledouble(12345, 12345),0);
//     Test.assertEquals(tripledouble(666789, 12345667),1);
//     Test.assertEquals(tripledouble(10560002, 100),1);
//     Test.assertEquals(tripledouble(1112, 122),0);
//   });