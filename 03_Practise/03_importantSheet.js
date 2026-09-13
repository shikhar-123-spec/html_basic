let array = [21, 3, 4, 5, 66, 77, 66, 22, 56, 3, 5, 77];

// question ask me to find 2nd largest element in an array 

// unique -> sort in reverse -> 1st index element is always my 2nd highest element in an array 


let arr = [... new Set(array)];  // remoove duplicate and store in array 


arr.sort(function (a, b) {      // sort the array in reverse order 
    return b - a;
})


// sort() modifies the original array

console.log(arr);

let result = arr[1];

// by using fat arrow function

let store = [...new Set(array)]
store.sort((a, b) => b - a);

console.log(store[1]);






// reverse the array without using built in method

let suppose = [1, 3, 5, 6, 7, 822, 4555, 66677];
// reverse() mutates the original array
suppose.reverse();

//  const reversed = [...suppose].reverse(); 
// If you don't want to change the original array, use:


// for (let i = suppose.length - 1; i >= 0; i--) {
//     reverse.push(suppose[i]);
// }


// count the no. frequency of element


let consider = [1, 3, 2, 4, 6, 7, 2, 4, 2, 6, 7, 6, 5];

let obj = {};

consider.forEach(function (value) {

    obj[value] === undefined ? (obj[value] = 1) : (obj[value]++);
})

console.log(obj);


