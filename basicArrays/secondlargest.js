function SeekSecondLarge(inputArray) {
    let largest=-Infinity;
    let secondLarge=-Infinity;

    if(inputArray.length<2) return null;

    for(let i=0;i<inputArray.length;i++){
        if(!Number.isFinite(inputArray[i])) return null;

        if(inputArray[i]>largest){
            secondLarge=largest   //its store a largest element before the update largenumber
            largest=inputArray[i]; //largest is update the element 99
        }
        else if(inputArray[i] > secondLarge && inputArray[i] !== largest){   //when the largest element condition satified the loop will check this condition and update the value 15
            secondLarge=inputArray[i];
        }
    }
    return secondLarge;
}


let result=SeekSecondLarge([Infinity,10,20,20]);
console.log(result);
