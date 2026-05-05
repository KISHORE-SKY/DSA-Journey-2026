// *****
// *****
// *****
// *****
// *****

function normalStar(n) {
    
    for(let i = 0;i < n;i++){
        let row = "";
        for(let j = 0;j < n;j++){
            row+="*";
           // console.log(`i - ${i}    j - ${j}`);   
        }
        console.log(row);
    }

}
//normalStar(5);



// *
// **
// ***
// ****
// *****

function patternTwo(n) {
    for(let i = 0;i < n;i++){
        let row = "";
        for(let j = 0;j <= i;j++){
            row+="*"
        }
        console.log(row);
        
    }
}
//patternTwo(5);


// 1
// 22
// 333
// 4444
// 55555

function patternThree(n) {
    for(let i = 1;i <= n;i++){
        let row = "";
        for(let j = 0;j < i;j++){
            row+=i;
        }
        console.log(row);
        
    }
}
//patternThree(5);



// 1
// 12
// 123
// 1234
// 12345

function patternFour(n) {
    for(let i = 1;i <= n;i++){
        let row = "";
        for(let j = 1;j <= i;j++){
            row+=j;
        }
        console.log(row);
        
    }
}
//patternFour(5);


// 55555
// 4444
// 333
// 22
// 1

function patternFive(n) {
    for(let i = n;i >= 1;i--){
        let row = "";
        for(let j = 1;j <= i;j++){
            row+=i;
        }
        console.log(row);
        
    }
}
//patternFive(5);


// 12345
// 1234
// 123
// 12
// 1

function patternSix(n) {
    for(let i = n;i >= 1;i--){
        let row = "";
        for(let j = 1;j <= i;j++){
            row += j;
        }
        console.log(row);   
    }
}
//patternSix(5);



// *****
// ****
// ***
// **
// *

function patternSeven(n) {
    for(let i = n;i >= 1;i--){
        let row = "";
        for(let j = 1;j <= i;j++){
            row+="*";
        }
        console.log(row);
        
    }
}
//patternSeven(5);


function patternEight(n) {
    for(let i = 1;i <= n;i++){
        let row = "";
        let dot = "";
        for(let j = 1;j <= n-i;j++){
            dot+=" ";
        }
        for(let k = 1;k <= i;k++){
            row+="*";
        }

        console.log(dot + row);
    }
}
//patternEight(5);

//     *
//    **
//   ***
//  ****
// *****



function patternNine(n) {
    for(let i = 1;i <= n;i++){
        let toggle = 1;
        let row = "";

        for(let j = 1;j <= i;j++){
            row+=toggle;
            if(toggle === 1){
                toggle = 0;
            }
            else{
                toggle = 1;
            }
        }
        console.log(row);
        
    }
}
//patternNine(5);

// 1
// 10
// 101
// 1010
// 10101




function patternTen(n) {
    let toggle = 1;
    for(let i = 1;i <= n;i++){
        
        let row = "";

        for(let j = 1;j <= i;j++){
            row+=toggle;
            if(toggle === 1){
                toggle = 0;
            }
            else{
                toggle = 1;
            }
        }
        console.log(row);
        
    }
}
patternTen(5);

// 1
// 01
// 010
// 1010
// 10101
