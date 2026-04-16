// const n = 5;
// for(let i = 0; i <n; i++) {
//     let row = "";
//     for(let j = 0; j <n - i; j++) {
//         row += j+1;
//     }
//     console.log(row);
// }

const n=5;
for(let i=n;i>=1;i--){
    let row = "";
    for(let j=1;j<=i;j++){
        row += j;
    }
    console.log(row);
    
}

// i   j           console
// 5   5times(j)   1 2 3 4 5
// 4   4times(j)   1 2 3 4
// 3   3times(j)   1 2 3
// 2   2times(j)   1 2
// 1   1time(j)    1