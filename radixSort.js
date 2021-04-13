// works with integers by comparing the corresponding digits of the numbers
// radix works by sorting elements of an array in a bucket of their place values 
function radixSort(arr){
    // figure out how many digit the largest number has 
    // Loop from k= o upto this largest 
    // For each iteration of the loop 
        // create buckets for each digit(0 to 9)
        // place each number in the corresponding  buckets based on its kth digit 
    // Replace out existing array with values in the buckets starting with 0 upto 9
    //  return list at the end 
    
    let maxNumDigits = mostDigits(arr)
    for(let i=0; i < maxNumDigits; i++){
        // let bucket = [[],[],[],[],[],[],[],[],[],[]]
        let bucket = Array.from({length: 10}, () => [])
        let array = [1]
        for(let j = 0; j < arr.length; j++){
            let digitValue = getDigit(arr[j], i )
            bucket[digitValue].push(arr[j])
        } 

        arr = [].concat(...bucket)
    }
    return arr 
}

function getDigit(num, place){
    // let strNum = num.toString()
    // // return parseInt(strNum[strNum.length - 1 - place])
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
} 
function digitCount(num){
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
function mostDigits(arr){
    let maxDigits = 0
    for(let i=0; i < arr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits 
}

console.log(radixSort([2,541,123,45,2534]))

