//approach 1

// function MergeSort(n1,m,n2,n) {
//     let n1Copy = n1.slice(0,m);
//     let p1 = 0;
//     let p2 = 0;

//     for(let i=0;i<m+n;i++){
//         if(p2 >= n ||(p1 < m && n1Copy[p1] < n2[p2])){
//             n1[i] = n1Copy[p1];
//             p1++;
//         }
//         else{
//             n1[i] = n2[p2];
//             p2++;
//         }
//     }
//     return n1;
// }


// console.log(MergeSort([1,3,5],3,[6,7,7],3));



//aproach two

function mergeSortTwo(n1,m,n2,n) {
    let pointer1 = m-1;
    let pointer2 = n-1;

    for(let i=m+n-1;i>=0;i--){
        if(pointer2 < 0){
            break;
        }

        if(pointer1>=0 && n1[pointer1] > n2[pointer2]){
            n1[i] = n1[pointer1];
            pointer1--;
        }
        else{
            n1[i] = n2[pointer2];
            pointer2--;
        }
    }
    console.log(n1);    
}

mergeSortTwo([1,2,3],3,[4,4,7],3);

// i   pointer1    pointer2    n1
// 0   m-1(2)      n-1(2)      [1,2,3]
// start iteration

// 0   3[2]        7[2]        [.....,7]
// 1   3[2]        4[1]        [.....,4,7]
// 3   3[2]        4[0]        [....,4,4,7]
// 4        pointer2 ended so no need to run pointer1 
// 5        n1 because already its sorted   
// 6                           [1,2,3,4,4,7]
