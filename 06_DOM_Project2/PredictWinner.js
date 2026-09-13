var teams = ['CSK', 'RR', 'RCB', 'PBKS', 'GT', 'LKSG', 'KKR', 'SRH'];

var btn = document.querySelector('button');
var box = document.querySelector('#box');

btn.addEventListener('click', function () {
    let num = Math.floor(Math.random() * teams.length);
    let winnerTeam = teams[num];
    box.innerHTML = winnerTeam;
})