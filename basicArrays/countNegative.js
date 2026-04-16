function countsOfNegative(arr) {
    let negativeCounts=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            negativeCounts++;
        }
    }    
    return negativeCounts;
}

let countsResult=countsOfNegative([3,8,-1,-90,78,-7]);
console.log(countsResult);
