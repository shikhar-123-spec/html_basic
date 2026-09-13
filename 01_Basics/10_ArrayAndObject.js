// array is a collection of elements and stored in one variale 


let array = [2, 3, "shikhar", true, false, function () { console.log("hello") }];

console.log(array[3]);
console.log(typeof array[2]);
console.log(array);
console.log(array[5]());  // here we call the function which is stored in array

let arr = new Array(3);  // here we create an array of size 3

arr[0] = 2;
arr[2] = 4;

console.log(arr[1]);  // undefined
console.log(arr);
arr[1] = 3;
console.log(arr);


// an array is used to store multiple values 




// what is object in javascript  -  An object is a collection of properties, where each property is a key-value pair. The key is a string (or symbol) that identifies the property, and the value can be any data type, including other objects or function, 

//  objects are useful when you want to represent a real-world entity with multiple related pieces of information of single element.


var obj = {
    name: "Shikhar",
    age: 23,
    seX: "Male",
    greet: function () {
        console.log("Hi bol de ");
    },
    isInColegge: true,

    cgpa: [2, 3, 4, 5, 6],

};

var obj2 = new Object(2);



console.log(obj);
console.log(obj.greet());

console.log(obj.cgpa);