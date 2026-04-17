const n=6;
let toggle=1;

for(let i=1;i<=n;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=toggle;

        if(toggle===1){
            toggle=0;
        }
        else{
            toggle=1;
        }
    }
    console.log(row);
}

// i   j   toggle              row 
// 1   1   1=>0                1
// 2   2   0->1=>0             0 1
// 3   3   0->1->0=>1          0 1 0
// 4   4   1->0->1->0=>1       1 0 1 0
// 5   5   1->0->1->0->1=>0    1 0 1 0 1