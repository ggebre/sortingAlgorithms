// linear Search...loop through each element until you get the target 

function linearSearch(arr, target){
    // for (const elem of arr){
    for(let i=0; i < arr.length; i++){
        let currentElement = arr[i]
        if ( currentElement === target){
            return i
        }
    }
    return -1 
}
// binary Search 

function binarySearch(arr, value){
    // binary search 
    // find the middle element and compare with value 
    // if value === middle element, return middle index 
    // if value > middle element, 
    let left = 0 
    let right = arr.length - 1 
    while (left < right){
        let middle = Math.floor((right + left)/ 2)
        let currentElement = arr[middle]
        if (currentElement === value){
            return middle
        } 
        if (currentElement > value ){
            right = middle 
        } else {
            left = middle + 1
        }
    }
    return - 1
}

// string search in a string 
function searchAsubstring(str, subString){
    let n = subString.length 
    for(let i=0; i < str.length - n; i++){
        if(str.slice(i, i + n) === subString){
            return i
        }
    }
    return -1
}
function countAsubstring(str, subString){
    let count = 0
    for(let i=0; i < str.length; i++){
        let j = 0 
         while (j < subString.length){
            if (str[i + j] !== subString[j]){
                break 
            }
            j++
            if(j === subString.length){
                count++
            }
        }
    }
    return count 
}
console.log(countAsubstring("hgetullo getu gebre", 'getu'))
console.log(countAsubstring("hello getu gebre", 'getcho'))
