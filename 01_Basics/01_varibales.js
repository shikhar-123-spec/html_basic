const Name = "Shikhar Singh";
let ownerAge = 25;
var ownerCity = "New Delhi";
// console.log(a);
console.log(Name);
console.log(ownerAge);
console.log(ownerCity);
// Name = "John Doe"; // This will throw an error because Name is a constant
var ownerCity = "Mumbai"; // This will not throw an error because var allows redeclaration
ownerAge = 27; // This will not throw an error because ownerAge is declared with  var 

/*

 Prefer to not use var
 because of issue in functional scope and redeclaration behaviour

*/
console.log(ownerCity);
console.log(ownerAge);
console.table({ Name, ownerAge, ownerCity });

console.table([Name, ownerAge, ownerCity]);

// alert is use to show alert message on webpage
// prompt is use to 
// confirm - to confirm yes/no
// alert('Are you above 18');
// prompt('Enter your age : ');
// confirm("Are you above 18 : ")
