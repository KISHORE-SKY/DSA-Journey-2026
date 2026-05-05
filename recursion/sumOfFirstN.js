function sumOFfirstNnumber(n){
    //base case
    if(n === 0) return 0;
    
    //recursive case
    return n + sumOFfirstNnumber(n - 1);
}

console.log(sumOFfirstNnumber(10));

