for(let i=0;i<3;i++){
    for(let j=0;j<i;j++){
       // console.log(`i=${i} j=${j}`);
    }
}
// i    j
// 0    norun

// 1    0

// 2    0
//      1
     

for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
       // console.log(`i=${i} j=${j}`);
    }
}
// i   j

// 0   0

// 1   0
//     1

// 2   0
//     1
//     2

// 3   0
//     1
//     2
//     3

// 4   0
//     1
//     2
//     3
//     4




for(let i=0;i<3;i++){
    for(let j=i;j>0;j--){
        //console.log(`i=${i} j=${j}`);
    }
}
// i   j
// 0   norun

// 1   1

// 2   2
//     1


for(let i=0;i<3;i++){
    for(let j=i;j>=0;j--){
        //console.log(`i=${i} j=${j}`);
    }
}
// i   j
// 0   0

// 1   0
//     1

// 2   0
//     1
//     2



for(let i=5;i>0;i--){
    for(let j=0;j<i;j++){
        console.log(`i=${i} j=${j}`);
    }
}
// i   j
// 5   0
//     1
//     2
//     3
//     4
// 4   0
//     1
//     2
//     3

// 3   0
//     1
//     2

// 2   0
//     1

// 1   0

// 0   norun
