const n=5;
for(let i=n;i>=1;i--){
    let row = "";
    for(let j=1;j<=i;j++){
        row += i+" ";
    }
    console.log(row);
    
}


// i   j           console
// 5   5times(i)   5 5 5 5 5
// 4   4times(i)   4 4 4 4
// 3   3times(i)   3 3 3
// 2   2times(i)   2 2
// 1   1time(i)    1