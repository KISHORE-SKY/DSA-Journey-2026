// *
// * *
// * * *
// * * * *

const n = 4;
for(let i=0;i<n;i++){
    let row = "";
    for(let j=0;j<i+1;j++){
        row+="* ";    
    }
    console.log(row);
} 

// i(row)   J(column)
//  0       * - i(0)
//  1       * * - i(0,1)
//  2       * * * - i(0,1,2)
//  3       * * * * - i(0,1,2,3)