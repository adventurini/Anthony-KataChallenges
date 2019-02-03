//https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript

function expandedForm(num) {
var s= num.toString();
var wholeNumber = num;
var result ='';
var remainder =0;
var arr = [];
for (i=s.length-1; i>=0; i--){
    remainder = wholeNumber % (Math.pow(10, i));
    if (wholeNumber - remainder !== 0){
    arr.push(wholeNumber - remainder);
    }
    wholeNumber = remainder;
}
    return arr.join(' + ');
}

console.log(expandedForm(31012));
// console.log(expandedForm(42))
// console.log(expandedForm(70304));

