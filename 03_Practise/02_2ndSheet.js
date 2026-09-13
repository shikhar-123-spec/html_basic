// let ans = for (let i = 10; i <= 0; i--) {
//     console.log(i);
// };



let i = 10;

while (i >= 0) {
    console.log(i);
    i--;
}


let j = 1;

while (j <= 10) {
    console.log(j * 3);
    j++;
}


let sum = 0;


for (let i = 0; i < 101; i++) {
    sum = sum + i;
}

console.log(sum);


let str = "Java Script ";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

for (let i of str) {
    console.log(i);
}



let array = [3, 4, 5, 56, 88, 3, 5, 3, 5];

let array2 = [...array]; // it copies  the array without creating a reference 


// new Set(array)  remove duplicate but store in set 

let array3 = [...new Set(array)]; // uses the spread operator to convert the Set back into an array.  // it remove duplicate from array 


// 2nd way to remove duplicate element by using filter method 

let uniquearr = array.filter((value, index) => {
    return array.indexOf(value) === index;
});

console.log(uniquearr);