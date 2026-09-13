let str = "hello kaise ho aap";
let ans = str.split(' ');

ans2 = str.split(' ', 2);

/* Investigation 

split a string into a array based on a seprator 

string.split(separator, limit);

separator → tells JavaScript where to split the string.
limit → optional; tells JavaScript how many elements to keep.


*/

let str2 = " hello i am no. one ";

ans3 = str2.replaceAll("am", 'g'); // replace all am character with g 
ans4 = str2.replace('l', 'g'); // replace first occurence of l with g  


/* investigation 

  replace is used to replace substring/ character with given character/ substring
*/

// includes 

let str4 = " i am best developer in world "
let check = str4.includes("best"); // true

/* investigation 
 it is used to check whether a  substring or character  exist in a string    or not 

*/
