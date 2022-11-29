function getSumOfArrayElements(nums){
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if(!Number.isNaN(parseInt(nums[i],10))){
            sum += nums[i];
        }
    }
    return sum;
}

const mixedArray = ['ciao', 'come', 'stai', 1,2,4,5, 'pippo'];

console.log(getSumOfArrayElements(mixedArray));