function greet(parameter) {

    console.log(" i love you ")
};

greet();
greet();

console.log(typeof greet);
/*
 a function is used to execute  a block of code whenever we need it  
  with the help of  a function we can reuse the same line of code mutliple time

  // how to create a function  
     function(){
       -- block of code 
     }
*/

function parameter(a, b) {
    console.log(a, b);
}

parameter('okay ', 'yes');
parameter('daal  ', 'No');


function add(a, b, c, d) {
    console.log(a + b + c);
}

add(1, 2, 'a', 'b');



function abcd(a, b, e) {   // parameter
    console.log(a, b, e);
}

abcd(1, 2, 'chacha'); // argument  


//  6 type of function 

function firstType() {
    //   function statement 
}

var secondType = function () {
    // function  expression 
}

//  function(){
// anonymous function 
// }


//  () => {
//     // fat arrow function 
// }


let fiftType = (a) => {
    console.log(a);
    // fat arrow with one pointer 
}

fiftType(33);

let returnFunction = function () {
    return "shikhar";
}

var store = returnFunction();
console.log(returnFunction());



// fat arrow with implicit return

var sixthType = () => "shikhar , 2 ";

var store = sixthType();



//  rest parameter  ... rest parameter -->  A rest parameter allows a function to accept any number of arguments and collect them into an array.



function abcded(a, b, c, ...rest) {
    console.log(a, b, c)
}

abcded(1, 2, 3, 4, 5, 5, 6, 6)


// hoisting --> “Hoisting is the behavior where JavaScript processes  first  declarations variable/function  before executing the code.

console.log(first);

var first = 12;