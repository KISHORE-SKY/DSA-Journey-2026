function voterEligible(age){
    if(age>=18){
        console.log(`person eligible to vote ${age}`);   
    }
    else if(age<=0){
        console.log(`the invalid age ${age}`);
    }
    else{
        console.log(`person not eligible to vote ${age}`);
    }
}
voterEligible(-2);