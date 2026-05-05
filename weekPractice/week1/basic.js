//second largest number

function secondLargestNumber(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for(let i = 0;i < arr.length;i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else{
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

//console.log(secondLargestNumber([2,4,5,6,9,8]));


//second smallest number(value) in array
function secondSmallestNumber(arr) {
    let greatSmall = Infinity;
    let secodSmall = Infinity;

    for(let i = 0;i < arr.length;i++){

        if(arr[i] < greatSmall){
            secodSmall = greatSmall;
            greatSmall = arr[i];
        }
        else{
            secodSmall = arr[i];
        }
    }
    return secodSmall;
}

//console.log(secondSmallestNumber([0,4,5,7,-1,-2]));

