const n=5;
for(let i=1;i<=n;i++){
    let row="";
    let toggle=1;  //always initialize in 1 when outer loop execute

    for(let j=1;j<=i;j++){
        //let toggle=1;
        row+=toggle;

        //change the value toggle in inner loop
        if(toggle===1){
            toggle=0;
        }
        else{
            toggle=1;
        }
    }
    console.log(row);
    
}

// i   j   toggle
// 1   1   1
// 2   2   1 => 0
// 3   3   1 => 0 => 1
// 4   4   1 => 0 => 1 => 0
// 5   5   1 => 0 => 1 => 0 => 1