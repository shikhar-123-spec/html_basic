let a = 0;
let b = 1;


if (a > b) {
    console.log(true);
} else {
    console.log(false); // condition of 'if' if false
}


a = 5;
b = "3"
if (a == b) {
    console.log("double equal operator only compare value between operand ") // ==

} else {
    console.log("triple equal operator  compare value and data type of operands ")
}


// ternary operator 
// condition ? true : false 

let x = prompt("enter you age ");
let y = 18;

(x > y) ? console.log("Yes You are above 18 ") : console.log("NO you are NOt above 18");


// while loop is used when we don't know how many time loop will execute 
// for loop is used when we know how many time loop will execute 

// let sayLoveYou = "I Love you Baby";
// let i = 1;

// while (i < 7) {
//     console.log(sayLoveYou, i);
//     i++;
// }

// for (let j = 0; j < 8; j++) {
//     console.log(sayLoveYou, j);

// }


/* switch case 
    The switch statement is used when you want to compare one value against multiple possible values and execute different code depending on which value matches.


*/
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;


    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}


/*

  do while loop is used for alway then execute till while loop condition true




*/

let z = 1;

do {
    console.log(z);
    z++

}
while (z < 0);



/*
  break : use to exit loop immediately
  continue :  use to skip the current iteration and move to next 

*/