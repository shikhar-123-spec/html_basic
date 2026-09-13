let Str1 = "Shikhar";
let Str2 = " Singh";

console.log(Str1 + Str2);


let value = 3;

let negateValue = -value;

console.log(negateValue);

// Arithmetic operator
console.log(3 + 3); // 6
console.log(3 * 3);  // 9
console.log(4 / 2);   // 2 
console.log(2 ** 3);  // 8 
console.log(7 % 2);   // 1


let check = 1 + "2";
console.log(check);  // 12
console.log(typeof check); // string
check = 1 + 3 + "2";
console.log(check); // 42
console.log(1 + 2 + "2"); // 32

console.log((3 + 4) * 5 % 3);


console.log(true);      // true 
console.log(+true);    // 1 
console.log(+"");     // 0


num1 = num2 = num3 = 2 + 2;
console.log(num2);

let gameCounter = 100;
gameCounter++;  // here gameCounter++ and ++gameCounter act as same
console.log(gameCounter);

let x = 3;
let y = x--;  // post decrement  ||   First use the current value, then decrease it.

console.log(x, y);
// Expected output: "x:2, y:3"
console.log(`x:${x}, y:${y}`);

let a = 3;
// ++a;  // pre increment
// console.log(a);  // 4

// console.log(a++);  // 4
// console.log(a);  // 5

// a++;  // post increment
// console.log(a);  // 5
const b = --a;  // pre decrement

console.log(`a:${a}, b:${b}`);
// Expected output: "a:2, b:2"


