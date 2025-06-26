//Q1 Falsy or Truthy?
//  Given two values, return the first one if it is falsy, otherwise return the second one.
function filterOutFalsy(val1, val2) {
    return !val1 ? val1 : val2
}

console.log(filterOutFalsy(0, 500))

//Q2 Return the length of any given array
//  given an array, return its length
function arrLength(arr){
return arr.length
}

console.log(arrLength([1,2,3,4]))

//Q3 Get the last element in an array
//  Given an array, return the last element.
function lastElem(ray) {
    return ray[ray.length -1] 
}

console.log(lastElem([3,2,0,6,2]))

//Q4 Find the sum of an array
//  Given an array, return the sum of every element.
function arrSum(aray) {
    let sum = 0
    for (let i = 0; i< aray.length; ++i) {
        //This is how you loop through every element in an array
        console.log(aray[i])
        sum = sum + aray[i];        
    }
    return sum;
}

console.log(arrSum([2, 2, 2]))