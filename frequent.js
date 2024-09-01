let arr=[2,4,5,3,7,8,6,6]
function mostFrequent(arr){
    let freqMap={};
    let maxItem=arr[0];
    let maxCount=1;
    for(let i=0; i<arr.length; i++){
        let item=arr[i];
        if(freqMap[item]){
            freqMap[item]++;         
        }
        else{
            freqMap[item]=1;
        }
        if(freqMap[item]>maxCount){
            maxItem=item;
            maxCount=freqMap[item];
        }
    }
    return maxItem;
}
console.log(mostFrequent(arr));