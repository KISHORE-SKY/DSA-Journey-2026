function sumOFfirstNnumber(n){
    //base case
    if(n === 0) return 0;
    
    //recursive case
    return n + sumOFfirstNnumber(n - 1);
}

console.log(sumOFfirstNnumber(5));



// sum(5)
// 5 + sum(5 - 1) => sum(4) = 15
// 4 + sum(4 - 1) => sum(3) = 10
// 3 + sum(3 - 1) => sum(2) = 6
// 2 + sum(2 - 1) => sum(1) = 3
// 1 + sum(1 - 1) => sum(0) = 1
// 0
