let arr=[2,4,6,7,8];
function sumofSquares(arr) {
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]**2;

    }
   return sum; 
}
console.log(sumofSquares(arr));