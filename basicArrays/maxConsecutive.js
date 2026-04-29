//approach 1

// function findMaxConsecutive(arr){
//     let x = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === 1){
//             x++;
//         }
//         else{
//             x = 0;
//         }
//     }
//     return x;
// }

// console.log(findMaxConsecutive([1,1,0,0,1,1,1,0,1,1,1,1,1]));

// i       x
// 1[1]    1
// 1[2]    2
// 0[3]    0
// 0[4]    0
// 1[5]    1
// 1[6]    2
// 1[7]    3
// 0[8]    0
// 1[9]    1
// 1[10]   2
// 1[11]   3
// 1[12]   4
// 1[13]   5


//approach2 two(akshay)

function MaxConsecutive(arr) {
    let currentCount = 0;
    let maxCount = 0

    for(let i = 0;i < arr.length;i++){
        if(arr[i] === 1){
            currentCount++;
        }
        else{
            maxCount = Math.max(currentCount,maxCount); //compare and store maximum count in maxcount
            currentCount=0;
        }
    }
    return Math.max(currentCount,maxCount);
}

console.log(MaxConsecutive([1,0,0,1,1,1,1]));

// i       currentCount    maxCount
// 1[0]    1               1
// 0[1]    0               1
// 0[2]    0               1
// 1[3]    1               1
// 1[4]    2               1
// 1[5]    3               1
// 1[6]    4               4
