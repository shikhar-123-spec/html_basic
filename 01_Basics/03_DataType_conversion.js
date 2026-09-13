let number = 33;
console.log(typeof (number));
// convert number into string


let numberInString = String(number);
console.log(typeof (numberInString));
console.log(numberInString);


let loggedIn = Boolean(number);
console.log(loggedIn);
console.log(typeof loggedIn);

let bigNumber = BigInt(number);
console.log(bigNumber);
// 33n The n tells JavaScript :   "This value is a BigInt."
console.log(typeof bigNumber);




/*  investigation
    number -> string 
     33 -> 33 with string datatype 

     number -> boolean 
     except 0 it give true with boolean datatype  


*/

let score = "Shikhar"
console.log(score);

// console.log(typeof score);
// console.log(typeof (score));


// let valueInNumber = Number(score)
// console.log(typeof (valueInNumber));
// console.log(valueInNumber);


let loggedInBoolean = Boolean(score);
console.log(loggedInBoolean);
console.log(typeof loggedInBoolean);


// 1 => true; 0 => false
// "" => false
// "Shikhar" => true



/*  investigation

     string -> int
     "hitesh"-> NaN with number datatype


     converting a  numeric string into a number
      so it give a valid representation of number with number datatype 


     sometime it give Nan -> it's Number type
     when numeric operation does not have valid number representation

     like "shikhar123" -> Nan 
     NaN stands for Not a Number.

         It is a special value in JavaScript that means the result is not a valid number.


*/


// console.log(Number("123"));     // 123
// console.log(Number("12.5"));    // 12.5
// console.log(Number("hello"));   // NaN
// console.log(Number("123abc"));  // NaN
// console.log(Number(""));        // 0
// console.log(Number("   "));     // 0


// convert boolean into number and string 

let someNumber = null

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)


/*
   when null  is type cast into number it give 0  && 
   undefined is type cast into number it give NaN

   Or 
   with string java script give null and undefinded respectively with string datatpe 
*/

let someNumbers = undefined

let stringNumbers = String(someNumbers)
console.log(stringNumbers);
console.log(typeof stringNumbers)




let isOnline = True;

let booleanInNumber = Number(isOnline);
let booleanInString = String(isOnline);

console.log(booleanInNumber);

console.log(booleanInString);



