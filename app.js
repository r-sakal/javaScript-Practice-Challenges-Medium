//Q1 Falsy or Truthy?
//  Given two values, return the first one if it is falsy, otherwise return the second one.
function filterOutFalsy(val1, val2) {
    return !val1 ? val1 : val2
}

console.log(filterOutFalsy(0, 500))