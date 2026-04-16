const n=5;
for(let i=n;i>=1;i--){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*";
    }
    console.log(row);
}

// i   j   row
// 5   5   *****
// 4   4   ****
// 3   3   ***
// 2   2   **
// 1   1   *