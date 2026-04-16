function searching(arr,input) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]===input) {
            console.log(arr.indexOf(arr[i]));
        }
        else {
            console.log(-1);
        }
    }
}
//searching([2,3,4,12],12)

function seeking(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===x){
            return arr.indexOf(arr[i]);
        }
    }
    return -1;
}

let result = seeking([2,8,8,12,9],12);
console.log(result);
 
