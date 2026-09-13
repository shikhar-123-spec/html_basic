// map filter reduce 

let arr = [1, 3, 4, 5, 5, "3"];

let store = arr.forEach(function (value) { // it iterate over each element 
    console.log(value);
})

let ans = arr.map(function (value) {
    return 12;
});



// map is used to when we want to transform every elements of an array and create a new array containing the transformed values.
// It does not modify the original array.”


// filter is used to filter only element who staisfy the  conditition and collect them in an new array 



let store2 = arr.filter(function (value) {
    if (value == 3) return false;
    else return true;
})


// reduce() is used to reduce an array to a single value by processing each element one by one.

let store3 = arr.reduce(function (accumalator, key) {
    return accumalator * key;
}, 1);

let sum = arr.reduce(function (acc, key) {
    return acc + key;
}, 0);


