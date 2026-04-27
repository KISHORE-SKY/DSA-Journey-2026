// space complexity O(1)

function ReverseString(s) {
    let lengthOfS = s.length;
    let halfOfS = lengthOfS/2;
    console.log(lengthOfS);
    

    for(let i = 0; i < halfOfS; i++){
       // swaping(i,n-1-i) i=2 ,lengthOfS-1-2 
        let temporary=s[i];
        s[i] = s[lengthOfS-1-i];
        s[lengthOfS-1-i]=temporary;
       
    }
    

    return s;
}

console.log(ReverseString(['s','k','i','s','h','o','r','e']));
