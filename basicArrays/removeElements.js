function RemoveElement(nums,value) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== value){
            nums[x] = nums[i];
            x+=1;
        }
        else{
            nums[i]="_";
        }
        
    }
    return nums;
}

console.log(RemoveElement([3,2,2,3],3 ));

// x            i               nums
// 0[0]         3[0](equal)     [3,2,2,3]
// 2[0](x+1)    2[1](no equal)  [2,2,2,3]
// 2[1](x+1)    2[2](no equal)  [2,2,2,3]
//              3[3](equal)     [2,2,_,_]