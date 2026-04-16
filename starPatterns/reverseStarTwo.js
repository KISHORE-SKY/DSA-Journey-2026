// i   j       k       row
// 1   n-i=4   i(1)    ....*
// 2   n-i=3   i(2)    ...**
// 3   n-i=2   i(3)    ..***
// 4   n-i=1   i(4)    .**** 
// 5   n-i=0   i(5)    *****


const n=5;
for(let i=1;i<=n;i++){
    let row="";
    let dot="";
    for(let j=1;j<=n-i;j++){
        dot+=" ";
    }
    for(let k=1;k<=i;k++){
        row+="*";
    }
    console.log(dot+row);
    
}