function smallerValue(arr){
    let initialize=arr[0];
    let smallest=initialize;
    //let smallest=Infinity; //global object another way
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest=arr[i];
        }
    }
    return smallest;
}

let rusult=smallerValue([3,-9,7,4,0,-7]);
console.log(rusult);
