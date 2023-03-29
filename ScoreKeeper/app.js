"use strict"

let message = document.querySelector(".message");

let score1 = document.querySelector(".score-display-1");

let score2 = document.querySelector(".score-display-2");

let playingTo = document.querySelector("#playing-to");

let winningScore = 0; //by default

let selectTotalScore = document.querySelector('#playing-to');

let isGameOver = false;

let p1Plus = document.querySelector('.p1-increase-btn');

let p1Minus = document.querySelector('.p1-decrease-btn');

let p2Minus = document.querySelector('.p2-decrease-btn');

let p2Plus = document.querySelector('.p2-increase-btn');


// Player Name 
let player1Name = document.querySelector('#name1');
document.querySelector('#p1-name').addEventListener('click', function() {
  console.log(player1Name.value);
})

let player2Name = document.querySelector('#name2');
document.querySelector('#p2-name').addEventListener('click', function() {
    console.log(player2Name.value);
  })

// Select Winning Score
selectTotalScore.addEventListener('change', function(){
    winningScore = selectTotalScore.value;
    message.textContent = `The winning score is setted to ${winningScore} !`;
})

// PLUS Handler
p1Plus.addEventListener('click', function(){
    if(winningScore > score1.textContent) {
       score1.textContent++;
    } 
    if(score1.textContent === winningScore) {
        console.log("WIN");
        message.textContent = `${player1Name.value} is win`;
     }
})

p2Plus.addEventListener('click', function(){
    if(winningScore > score2.textContent) {
       score2.textContent++;
    } 
    if(score2.textContent === winningScore) {
        console.log("WIN");
        message.textContent = `${player2Name.value} is win`;
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

 if(document.querySelector('#name2').value != "") {
    console.log(player2Name.value);
 }