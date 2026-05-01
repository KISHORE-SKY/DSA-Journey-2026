// //approach 1 (time complexity:O(n) space complaxity:O(n))

// function SingleNumberCount(nums){
//     let hashMap = {};
//     for(let i = 0;i < nums.length;i++){
//         if(!hashMap[nums[i]]){
//             hashMap[nums[i]] = 1;
//         }
//         else{
//             hashMap[nums[i]]++;
//         }
//     }
//     for(let i = 0;i < nums.length;i++){
//         if(hashMap[nums[i]] === 1){
//             return nums[i];
//         }
//     }
// }

// console.log(SingleNumberCount([2,3,4,5,2,3,4]));


//approach 2 math way with XOR operator (time complexity:O(n), space complexity:O(0))

function singleNumber(nums) {
    let xor = 0;
    for(let i = 0;i < nums.length;i++){
        xor = xor ^ nums[i];
    }
    return xor;
}

console.log(singleNumber([2,4,2,5,3,4,3]));

