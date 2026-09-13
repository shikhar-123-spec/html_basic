// iife immediately invoked function expression -- It is a function that is defined and executed immediately, without needing to call it separately later.
//  IIFE = Define + Execute immediately

(function iife() {
    console.log("I am an IIfe function ");
})();


// iife(); // calling the function again will result in an error because it is not accessible outside of its own scope.  


var ans = (function abcde() {
    let a = 12;

    return {
        setA: function (value) {
            a = value;
        },
        getA: function () {
            return a;
        }

    }


})();


// by using iife we can redeclare the variable  our variable is not accessible outside of the function scope.

console.log(ans);
ans.setA(34);
ans.getA();

console.log(ans.getA());


let shery = (function sherryLibrary() {

    return {
        imageEffect: function (image) {
            console.log("I applied an image");
        },
        videoEffect: function (video) {
            console.log("I applied a video");
        }
    }

})();

console.log(shery);

shery.imageEffect("image.jpg");


// hof - higher order function - A higher-order function is a function that can take other functions as arguments or return functions as its result. In JavaScript, functions are first-class citizens, which means they can be treated like any other value, such as numbers or strings. This allows for the creation of higher-order functions that can manipulate and work with other functions.


// this is an example of return  hofs function 

var hof = function () {

    return function hofs() {
        console.log("This is high order function");
    }

}

let store = hof(); // store the returned function in a variable

store(); // call the returned function


//  Now this is an example of hofs function use as a parameter


function abcd(fnt) {
    fnt(); // calling the function passed as an argument

}

abcd(function arg() {
    console.log("This is an example of argument funtion");
});



// callback function is a function that is passed as an argument to another function and is executed after some operation is completed. It allows for asynchronous programming and enables you to handle events or perform actions once a certain task is finished.


function abcd(val) {  // this is hofs function 
    val();

};

abcd(function () {
    console.log(" this function is passed as an argument to another function and called as callback function ")
});


// first class function - In JavaScript, functions are first-class citizens, which means they can be treated like any other value. This allows you to assign functions to variables, pass them as arguments to other functions, and return them from functions. First-class functions enable powerful programming techniques such as higher-order functions and callbacks.


// pure function -  A pure function is a function that does not modify any external state or variables and always produces the same output for the same input. It has no side effects, meaning it does not change any data outside of its own scope. 

function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5






// impure function - An impure function is a function that may modify external state or variables, or produce different outputs for the same input. It can have side effects, meaning it can change data outside of its own scope. 

// this is not pure function because it modifies the outside variable 'count' and produces different outputs for the same input.

let count = 10;

function increase() {
    count++;       // modifies outside variable
    return count;
}


// global scope - The global scope refers to the outermost scope in a JavaScript program, where variables and functions are accessible from anywhere in the code. Variables declared in the global scope are available throughout the entire program, including inside functions and blocks. However, excessive use of global variables can lead to naming conflicts and make code harder to maintain.

// local scope -  The local scope refers to the scope within a specific function or block in JavaScript. Variables declared within a function or block are only accessible within that function or block and are not visible outside of it. Local scope helps prevent naming conflicts and allows for better encapsulation of variables and logic.


// A closure happens when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.Closures are commonly used for data privacy, maintaining state, callbacks, and function factories.

function outerfunction() {
    var count = 10;

    return function () {
        count++;
        console.log(count);
    }
};
outerfunction()(); // 11 