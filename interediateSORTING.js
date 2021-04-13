// INTERMEDIATE LEVEL SORTING, relatively faster for large size datasets 
// MERGE SORT ---IN 1948 

// break up the array into halves untill you have arrays that are empty or have one element
    // once you have smaller sorted arrays, merge those arrays with sorted arrays until you are back to the full
    // length of the array 
    // Once the array has been merged back together 

function mergeSort(arr){
    
    if(arr.length <= 1) return arr 
    let mid = Math.floor( arr.length / 2) 
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    

    return merge(left, right)

}

function merge(arr, arr2){
    let merged = []
    let indexArr = 0
    let indexArr2 = 0

    while( indexArr < arr.length && indexArr2 < arr2.length){
        if (arr[indexArr] > arr2[indexArr2]){
            merged.push(arr2[indexArr2])
            indexArr2++        
        }else{
            merged.push(arr[indexArr])
            indexArr++
        }
    }
    while (indexArr < arr.length) {
        merged.push(arr[indexArr])
        indexArr++ 
    }
    while (indexArr2 < arr2.length) {
        merged.push(arr2[indexArr2])
        indexArr2++ 
    }
    return merged
}

// console.log(mergeSort([1,5,3,2,6]))
 

function quickSort(arr, left=0, right=(arr.length - 1)){
   // Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
    // works by selecting one element(called the 'pivot')
    // find all elements less than the pivot on one side and the rest on the right side..
    if( left < right){
        let initial = pivot(arr, left, right)
        quickSort(arr, left, initial - 1)
        quickSort(arr, initial + 1, right)
    }
    return arr 
} 
// [5, 6, 3, 4, 6, 9]
    // [5, 6, 3,4,6,9]
    // [3, 5,6,4,6,9]
    // [3, 4, 5,6,6,9]
function pivot(arr, start=0, end=(arr.length + 1)){
    
    let pivotIndex = start 
    let pivot = arr[start ]
    for(let i = start + 1; i <= end; i++){
        let currentElement = arr[i]
        if(pivot > currentElement){
            pivotIndex++
            swap(arr, i, pivotIndex)
        }
    }
    swap(arr, start, pivotIndex)
    return pivotIndex
} 
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp 
}




let arr = [5,6,2,9,11,2,3, 7,1,4, 8, 0, -2, 10]
console.log(quickSort(arr))
console.log(arr)