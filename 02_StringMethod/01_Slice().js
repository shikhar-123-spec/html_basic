let str = "Apple";
let extract = str.slice(0, 2); // extract a portion of string  with exluded end point  "Ap"
let behindExtract = str.slice(-4, -1) // extract from behind // "ppl"
let singleNumber = str.slice(2); // ple 

/*  
       slice() vs substring()
       slice() supports negative indexes
       Where substring() treats negative values as 0.


*/

/*

// template literal  // backtics // template strings  --- `  ..  ` 
  --  allow embedding expression with a string using 
  backtics

*/

let str1 = `sum of 10 and 20 : ${10, 20}`;