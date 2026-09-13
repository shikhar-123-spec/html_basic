

"use strict"; // treat all js code as newwer version 

// alert(3 + 3); // we are using Node.js not browser 

console.log(3 + 3)  /* code readability should be high */

let name = "shikhar singh";
let age = 23;
let isLoggedIn = true;
/*
  @ primitive date type 

    primitive data type is immutable , contain single value  and copied only value of variable .
      string ->  " "
     number  -> range is (- 2 ^ 53 - 1) to 2^ 53 - 1
     boolean -> true/ false 
     BigInt - range is more than int 

     null  -> stand alone value 
     undefined  -> Variable is declared but value is not assigned 

     symbol -> unique 

*/

/* 

   @ Non primitive datatype 

   Non primitive data types are mutable , can hold multiple values and can be changed because it copies the reference of object not the value of variable.

   -- object 
*/

// get to know type of variable 


console.log(typeof "shikhar"); // string 
console.log(typeof 28);       // number 
console.log(typeof null);  // returns object due to a historical quirk
console.log(typeof undefined); // undefined 

