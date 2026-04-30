function missingNumber(nums) {
    let n = nums.length;
    let totalSum = n * (n + 1)/2;    //(0+1+2+3+...+n)=n(n+1)/2;
    let partialSum = 0;     //0+1+2+3+4+..+6

    for(let i = 0;i < nums.length;i++){
        partialSum += nums[i];
    }
    return totalSum - partialSum;
}

console.log(missingNumber([4,0,2,1,5,6]));


// totalSum    partialSum
// n(n+1)/2    0+1+...+n

