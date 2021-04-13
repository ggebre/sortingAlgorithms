// selection sorting...finds the minimum from a substrig and compares it with
// the first element and swaps them..
function bubbleSort(arr){
    // compares two consecutive elements and swap these elements 
    // bubbles the largest element to the right  
    let count = 0
    let newArr = [...arr]
    // for(let i=0; i < newArr.length; i++){
    //     for(let j=i+1; j < newArr.length; j++){
    //         count++
    //         if (newArr[i] > newArr[j]){
    //             let temp = newArr[i]
    //             newArr[i] = newArr[j]
    //             newArr[j] = temp 
    //         }
    //     }
    // } 
    let first = 0
    let last = newArr.length
    while (first < last){
        for(let i = first; i < last - 1; i++){
            count++
            if (newArr[i] > newArr[i + 1]){
                let temp = newArr[i]
                newArr[i] = newArr[i + 1]
                newArr[i + 1] = temp 
            } 
        }
        last-- 

    }
    console.log(count)
    return newArr 
}
function bubbleSortOptimized(arr){
    // O(n^2)
    // FOR ALMOST SORTED O(n)
    let noSwaps;
    let count = 0;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < i - 1; j++){
            count++
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp 
                noSwaps = false 
            }
        }
        if(noSwaps) break 
    }
    console.log(count)
    return arr
}
function selectionSort(arr){
    // time complexity O(n^2)
    // space complexity O(n)
    // moves the min to the first position 
    // moves to the second position and get min
    // place min at the second postion 
    let newAr = [...arr]
    for(let i=0; i < newAr.length; i++){
        let lowest = i
        for(let j = i + 1; j < newAr.length; j++){
            if(newAr[j] < newAr[lowest]){
                lowest = j
            }
        }
        if (i !== lowest){
            let temp = newAr[i]
            newAr[i] = newAr[lowest]
            newAr[lowest] = temp 
        }  
    }
    return newAr
}

function insertionSort(arr){
    // Start by picking the second element in the array
    // Compare the second element with the one before it and swap if necessary
    // continue to the next element and if it is in the incorrect order, 
        // iterate throught the sorted portion(i.e the left side) to place the element in the correct place
    // Repeat until the array is sorted.....
    
    // for(let i=1; i < arr.length; i++){
    //     let currentElement = arr[i]
    //     let insert = false;
    //     for(let j=0; j < newArr.length; j++){
    //         if(newArr[j] > currentElement){
    //             insert = true
    //             index = j 
    //             break 
    //         }
    //     }
    //     insert ? newArr.splice(index, 0, currentElement) : newArr.push(currentElement)
    // }
    // HOW DOES IT WORK 
    // Assume input [0,1,2,3, -1]
    // currentVal = -1
    // compares currentElement with 3 
    // [0,1,2,3,3]
    // [0,1,2,2,3]
    // [0,1,1,2,3]
    // [0,0,1,2,3]
    // [-1, 0,1,2,3]
    for(let i=1; i < arr.length; i++){
        let currentVal = arr[i]
        for(var j = i - 1; j >=0 && arr[j] > currentVal; j--){
            // reassign [j+1] element with [j]
            arr[j+1] = arr[j] 
        }
        arr[j + 1] = currentVal
    }
    
    return arr
}
console.log(insertionSort([0, 2, 21,-3,18,9,-10,11]))
// console.log(bubbleSort([2,3,8,9,10,11]))
// [0,2,21,-3,18,9,-10,11]
// [-3,0,2,21,18,9,-10,11]