let n=[1,2,3,4,5,6];
let fristElement=n[0];
console.log(fristElement);
 
function isPrime(n) {
    if(n<2)
        return `${n} is not a prime`;
    if(n==2)
        return`${n} is prime`;
    for(let i=2; i*i<n; i++){
        if(n % i==0){
        return `${n} is not a prime number`;
        }
    }
return  `${n} is a prime number`;
}
console.log(isPrime(6));
