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

//Q5 Add up the numbers from a single number 
//  Given a number, add up all the numbers from one to the number that is given.
//  ex) an input of 4 will give you 1 + 2 + 3 + 4, which equals 10.
function progressiveSum(num){
    let total = 0;
    for (let i = 1; i <= num; ++i) {
        console.log(i)
        total = total + i
    }
    return total;
}

console.log(progressiveSum(3))

//Q6 Calculate the time
//  Given a number in seconds, return this number in mm:ss format.
function calcTime(seconds) {
    let timerSeconds = seconds % 60;
    let timerMinutes = Math.floor(seconds / 60); 
    //in order to add a zero if the time in minutes is only one number long you need to convert to a string to calculate length as follows
    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }
    return timerMinutes + ':' + timerSeconds
// need to take seconds and divide by 60 whole number is minutes, remainder is seconds

}

console.log(calcTime(50))

//Q7 Find the largest number
//  Given an array of numbers, return the largest number of that array.
function getMax(bigNum) {
    for (let i = 0; i < bigNum.length; ++i)
    //  this is what I came up with after googling how to sort an array!
        bigNum.sort((a, b) => a-b);
        return bigNum[bigNum.length - 1];

}

// the method showed in the video
// let max = arr[0]
// for (let i = 1; i< arr.length; ++i) {
//      if (arr[i] > max) {
//      max = arr[i];
//     }
//     return max;
// }

console.log(getMax([500, 100, 60]))

// Q8 Reverse a string
//      Given a string, return the reversed string 
//          -Use an incrementing for loop
function reverseString(strng) {
    //let reversedString = '';
    // for (let i = 0; i < strng.length; ++i) {
    //     console.log(strng[i])
    //     reversedString = strng[i] + reversedString
    // }
    // return reversedString;
    //          -Use a decrementing for loop
    // for (let i = strng.length - 1; i >= 0; --i) {
    //     reversedString += strng[i];
    // }
    // return reversedString;

    //          -Use the array reverse property
    //              in order to convert a string into an array you must use the .split('')
    //              .reverse() reverses the array
    //              .join('') joins the array back into a string
    return strng.split('').reverse().join('')
}

console.log(reverseString('abc'))
