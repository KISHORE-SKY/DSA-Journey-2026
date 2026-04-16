function SecondSmallest(arr) {
    let firstSmall=Infinity;
    let secondSmall=Infinity;
    if(arr.length<2) return null;
    if(!Array.isArray) return false;

    for(let i=0;i<arr.length;i++){
        if(arr[i]<firstSmall){
            secondSmall=firstSmall;
            firstSmall=arr[i];
        }
        else if(arr[i]<secondSmall){
            secondSmall=arr[i];
        }
    }
    return secondSmall;
}

let result = SecondSmallest([-2,7,8,9,-3,2,34,9]);
console.log(result);
