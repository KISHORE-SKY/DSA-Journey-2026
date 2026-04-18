function reverseNumber(x) {
    let xCopy = x;
    let reverse = 0;

    x=Math.abs(x);
    while(x>0){
        let last = x % 10;
        reverse = (10 * reverse) + last;
        x = Math.floor(x/10);
    }
    let limit = Math.pow(2,31)-1; //32 bit signed 2(31)
    if(reverse>limit) return 0;

    return (xCopy<0) ? -reverse : reverse;

}

console.log(reverseNumber(-214748364));


// x           last    reverse
// -123(123)   0       0
// 123         3       3
// 12          2       32
// 1           1       321
// 0            loop breaks
