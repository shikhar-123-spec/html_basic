//  5 uses of console methods in JavaScript:


console.log("hello world !");
console.warn("This is warning!");
console.error("This is error !");
console.info("this is similar to log method");
console.table({ name: "shikhar", age: 21, gender: "Male", Married: false });


console.log(typeof null); // object  javascript quirk
console.log(typeof undefined); // undefined

console.log(typeof Symbol("id")); // Symbol

var a = 24;
var b = 45;

// var temp = a;
// a = b;
// b = temp;

[a, b] = [b, a]
console.log(a, b);


// nya concept

console.groupCollapsed("My Group");  // grouping console messages // groupCollapsed() creates a collapsed group, while console.group() creates an expanded group by default.

console.log("Team mate name is Deepak");
console.log("We are working on a project");
console.log("we are working on a nlp project");
console.groupEnd();




const obj = {
    name: "Shikhar",
    age: 23,
    year: "4th - Year"
}

obj.year = "IV - year ";
console.log(obj);

// const variable modify the value but cannot change the datatype.

// if we want our object not get modify so will use 

// Object.freezez(obj);

obj.age = 33;
console.info(obj);

// convert string into Number

var a = "50";
var b = "50";
let c = "50";

console.log(Number(a));
console.log(parseInt(b));
console.log(+ c);


