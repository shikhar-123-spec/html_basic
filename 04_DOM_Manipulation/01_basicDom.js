// DOM := Document object Model  It is a tree-like representation of an HTML document created by the browser. JavaScript can use the DOM APIs to access, modify, create, or remove HTML elements and respond to user interactions.”

// frontened ki java script 


/* 4 pillar of Dom 

 -- 1 --   Selection of element  ✅
 --2  --   changing html   😭
 --3  --      changing of css  🔔
 --4  --     Event Listener 🏳️


*/


// 1 selection of element 

var storeElement = document.querySelector('p'); // it pick First 1️⃣ element 
var p = document.querySelectorAll('p'); // it is used to select all element  
console.log(p[1]);

p[1].innerHTML = "changed";
p[2].innerHTML = "bik chuki hai ye government ";




// 2nd changing html 
storeElement.innerHTML = "Vartmaan Aaankho ka dokha hai  ✅ ";

// 3rd changing css 


storeElement.style.color = "yellow "


storeElement.style.backgroundColor = "black"  // 💁 yaad rakho "C" capital hai 


// 4th pillar Event listener 


storeElement.addEventListener("click", function () {
    console.log("click on  store element ");

})

let box = document.getElementById('box');  // getElementById ke sath ./# nhi lagate hai 

console.log(box);
// box.textContent = "<p>changed</p>";
box.innerHTML = "<p>ok</p>";
// textContent deals with text only.  it can modify  the entire element 

// innerHTML allows you to get or set HTML inside an element.


// i want to change the color of button when i clicked it 

var colorChange = document.querySelector('button');


colorChange.addEventListener('click', function () {
    box.style.backgroundColor = "orange"; // i click on button and box color changed 
});









