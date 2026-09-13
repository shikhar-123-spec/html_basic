
function abcd(fnc) { // hofs   
    fnc();
}

abcd(function () {    // call back function 
    console.log("this function is passed as a argument ")
})

// closure is happen when inner function access a varible from its  parent function 




// Q1 := create a function that takes another function as an argument and call it after 3 seconds 


function assume(fnc) {
    setTimeout(fnc, 3000); // we have to carefull in this point we don't need to call fnc instead we only provide fnc 
}

assume(function () {
    console.log(" i have called this function after 3 seconds ");

})


// q2 := implement your own version of '.map()'as a high order function



let array = [1, 2, 3, 4, 5, 6];


function process(a, fnc) {
    let newArray = [];

    for (let i = 0; i < a.length; i++) {
        newArray.push(fnc(a[i]));
    }

    return newArray;
}


let result = process(array, function (a) { // transformed value 
    return a + 3;
});
console.log(result);


// q3 := write a function that use closure to create a counter 



let store = function () {
    let counter = 0;

    let arr = [];

    return function inner() {
        while (counter <= 10) {

            arr.push(counter);
            counter++;
        }
        return arr;
    }


}

let store2 = store();
console.log(store2());




// 2nd use of closure function 

function counter() {
    let count = 0;
    return function () {
        console.log(count++);

    };
}
var makecount = counter();
var makecount2 = counter();
makecount();
makecount();
makecount();
makecount2();
makecount2();


// q4 : Implement a finction that limit how many times another function can be called (closure + hof )

function fnLimiter(fn, limit) {

    let countCalled = 1;
    return function () {
        if (countCalled <= limit) {
            fn();
            countCalled++;

        }
        else {
            console.warn("limit reached ");
        }

    }
}



let limit = fnLimiter(function () {

    console.log("hey");

}, 3);

limit();
limit();
limit();
limit();
limit();


