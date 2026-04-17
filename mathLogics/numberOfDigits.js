//const input = 24689;
function numberOfDigits(input) {
   let count=0;
   if(input===0) return 1;

    input=Math.abs(input); //its convert negative to positive
    while(input>0){
        input = Math.floor(input/10);
        count++;
    } 
    return count;
}

console.log(numberOfDigits(-9090));

// Math.abs()      input       count
// -9090 to 9090   9090/10     0
//                 909/10      1
//                 90/10       2
//                 9/10        3
//                 0           4