var h5 = document.querySelector('h5');
var btn = document.querySelector('button');

let flag = 0;
btn.addEventListener('click', function () {

    if (flag == 0) {
        btn.innerHTML = "remove freind";
        h5.innerHTML = "Freinds";
        h5.style.backgroundColor = "green";
        flag = 1;
        console.log("Now this is my freinds ")

    }
    else {
        btn.innerHTML = " Add freinds ";
        h5.innerHTML = "stranger";
        h5.style.backgroundColor = "red";
        console.log("now i make unfreind");
        flag = 0;


    }



})