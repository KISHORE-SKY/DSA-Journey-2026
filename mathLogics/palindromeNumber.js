
function palindrome(input){

    let inputCopy = input;
    if(input<0) return false; //negative numbers should not be a palindrome eg: -121 => 121-

    let remainder = 0;
    let reverse = 0;

    while(input>0){
        remainder = input % 10;    //modules by 10 returns and takes(find) a last digit
        reverse = (10 * reverse) + remainder;
        input = Math.floor(input/10); // its remove the last digit
    }
    return reverse === inputCopy;
  
}

console.log(palindrome(0));

// input       remainder       reverse
// 1234        0               0
// 123         4               4
// 12          3               43
// 1           2               432
// 0             loop is breaks
