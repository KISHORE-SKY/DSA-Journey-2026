const n = 5;
for(let i=1;i<=n;i++){
    let row = "";
    for(let j=1;j<i+1;j++){
        row += j+' ';
    }
    console.log(row);
}

// i(row)      j(column)
// 1           i(1) - 1
// 2           i(2) - 1,2
// 3           i(3) - 1,2,3
// 4           i(4) - 1,2,3,4
// 5           i(5) - 1,2,3,4,5