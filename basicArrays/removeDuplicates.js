function RemoveDuplicates(nums){

    //two pointer method
    let x = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] > nums[x]){
            x+=1;
            nums[x] = nums[i];
        }
    }
    return x+1
}

console.log(RemoveDuplicates([0,0,0,1,2,3,4,5,5,6])); //0,1,2,3,4,5,6


// i               x       nums
// 0[0](new)       0[0]    [0,....]
// 0[1]           
// 0[2]
// 1[4](new)       1[1]    [0,1,....]
// 2[5](new)       2[2]    [0,1,2,....]
// 3[6](new)       3[3]    [0,1,2,3,..,..]
// 4[7](new)       4[4]    [0,1,2,3,4...,..]
// 5[8](new)       5[5]    [0,1,2,3,4,5,...]
// 5[9]
// 6[10](new)      6[6]    [0,1,2,3,4,5,6]