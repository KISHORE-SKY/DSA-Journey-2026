//my approach two pointer with swap

function MoveZero(arr){
    let pointer = 0;

    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== 0){

            let tempVar = arr[i];
           // console.log(tempVar);
            
            arr[i] = arr[pointer];
            //console.log(arr[i]);
            
            arr[pointer] = tempVar;
            //console.log(arr[pointer]);
            //console.log(pointer);
            
            pointer++;
        }
    }
    return arr;
}

console.log(MoveZero([0,2,0,2,5,6,7,80]));


//my teacger akshay approach two pointer overide

function movingZeros(inputArray){
    let pointerX = 0;
    for(let i = 0;i < inputArray.length;i++){
        if(inputArray[i] !== 0){
            inputArray[pointerX] = inputArray[i];
            pointerX++;
        }
    }
    for(let i=pointerX;i<inputArray.length;i++){
        inputArray[i] = 0;
    }
    return inputArray;
}

console.log(movingZeros([2,3,0,5,0,9]));
