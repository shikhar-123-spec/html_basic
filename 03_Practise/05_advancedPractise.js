

// q1 := Create a function that takes a callback and execute it after every n seconds executively 



function callonTimer(fnc, timer) {


    setInterval(fnc, timer * 1000);  // yeh barr barr chlega kuch time baad 




}

// let store = callonTimer(function () {
//     console.log(" i have to make this call after  n seconds ")
// }, 2);



// Q: =2  Implement a function that return  a function with a different  greeting (closure)



function greetKaro(val) {

    return function (name) {
        console.log(val, name); //        console.log(`${greet} ${name}`);

    }

}

let yes = greetKaro("hello");
yes();
yes("harsh");
yes("vaivbhav")


let inBhojpuri = greetKaro("Namaste");
inBhojpuri();
inBhojpuri("harsh");
inBhojpuri("vaivbhav");


// q:= 3 Implement a function that only execute one time by using closure + hof




function callOneTime(fnc) {
    let called = false;
    return function () {

        if (called == false) {
            fnc();
            called = true;
        }

        else {
            console.warn("code is already executed one time ");
        }



    }
}


let result = callOneTime(function () {
    console.log("this code is execute only one time")
});

result();
result();
result();


// q := 4 Implement a funtion that throttle the another function only after some second (hof + closure )


function throt(fnc, delay) {
    let lastTime = 0;
    return function () {
        let currentTime = Date.now();
        if (currentTime - lastTime >= delay) {
            fnc();
            lastTime = currentTime;
        }


    }

}

let result2 = throt(function () {
    console.log("i am executing after 5 second although i am called many times ")
}, 5000);

result2();
result2();
result2();
result2();
result2();

