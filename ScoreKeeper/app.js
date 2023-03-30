"use strict"

let message = document.querySelector(".message");

let score1 = document.querySelector(".score-display-1");

let score2 = document.querySelector(".score-display-2");

let playingTo = document.querySelector("#playing-to");

let winningScore = 0; //by default

let selectTotalScore = document.querySelector('#playing-to');

let resetBtn = document.querySelector('#reset-btn');

let p1Plus = document.querySelector('.p1-increase-btn');

let p1Minus = document.querySelector('.p1-decrease-btn');

let p2Minus = document.querySelector('.p2-decrease-btn');

let p2Plus = document.querySelector('.p2-increase-btn');

// Store Player Name 
let player1Name = document.querySelector('#name1');
let player2Name = document.querySelector('#name2');

// Select Winning Score
selectTotalScore.addEventListener('change', function(){
    winningScore = selectTotalScore.value;
    message.textContent = `📣 The winning score is ${winningScore} ! 📣`;
})

// PLUS Handler
p1Plus.addEventListener('click', function(){
    if(winningScore > score1.textContent) {
       score1.textContent++;
    } 
    if(score1.textContent === winningScore) {
        console.log("WIN");
        message.textContent = `${player1Name.value} won! 🎉`;
        document.querySelector("body").style.backgroundColor = "#E96479";
        document.querySelector(".wrapper").style.backgroundColor = "#E96479";
     }
})

p2Plus.addEventListener('click', function(){
    if(winningScore > score2.textContent) {
       score2.textContent++;
    } 
    if(score2.textContent === winningScore) {
        console.log("WIN");
        message.textContent = `${player2Name.value} won! 🎉`;
        document.querySelector("body").style.backgroundColor = "#E96479";
        document.querySelector(".wrapper").style.backgroundColor = "#E96479";
     }
})

// Minus Handler 
p1Minus.addEventListener('click', function(){
   if(score1.textContent > -(winningScore)) {
    score1.textContent--;
   }
})

p2Minus.addEventListener('click', function(){
    if(score2.textContent > -(winningScore)) {
     score2.textContent--;
    }
 })

// Reset
resetBtn.addEventListener('click', function() {
   message.textContent = `Start Now 🕰️`;
   document.querySelector("body").style.backgroundColor = "#BFACE2";
   document.querySelector(".wrapper").style.backgroundColor = "#BFACE2";
   score1.textContent = "0";
   score2.textContent = "0";
   selectTotalScore.value = 0;
   player1Name.value = "";
   player2Name.value = "";
})