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
