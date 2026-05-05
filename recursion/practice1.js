//only recursive case infinite loop

// function selfCall() {
//     console.log('namaste recursion');
//     selfCall();    
// }
// selfCall();




//base case with recursive case controlled recursion

// function decrease(num) {
//     if(num === 0) return; //base case

//     console.log(num);
//     num -= 1;           //recursive case
//     decrease(num);
    
// }
// let initial = 5;
// decrease(initial);

let n = 10;
function normalPrint(initial){
    if(initial > n){
        return;
    }
    console.log(initial);
    initial++;
    normalPrint(initial);
    
}

normalPrint(1);
