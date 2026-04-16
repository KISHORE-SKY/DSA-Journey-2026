function largrNumberInArray(inputArray){
    let initialize=inputArray[0]
    let largestNumber=initialize; 
    //let largestNumber=-Infinity; global object its another way

    for(let i=0;i<inputArray.length;i++){
        if(inputArray[i]>largestNumber){
            largestNumber=inputArray[i];
        }
    }
    return largestNumber;
}

let resultNumber=largrNumberInArray([-1,-9,-4]);
console.log(resultNumber);