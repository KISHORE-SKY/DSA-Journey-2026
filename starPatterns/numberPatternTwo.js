const n = 5;
for(let i=1;i<=n;i++){
    let row = "";
    for(let j=1;j<i+1;j++){
        row += i+" ";
    }
    console.log(row);
    
}

// i   j                  console
// 1   1times(i)=>row     1
// 2   2times(i)=>row     2 2
// 3   3times(i)=>row     3 3 3
// 4   4times(i)=>row     4 4 4 4
// 5   5times(i)=>row     5 5 5 5 5
