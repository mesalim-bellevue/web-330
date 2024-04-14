"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Meher Salim 
      Date:   04/11/2024

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
  intList[i] = i+1;
}
intList.sort(function() {
  return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
  let piece = document.createElement("img");
  piece.src = "piece" + intList[i] + ".png";
  let rowNum = Math.ceil((i+1)/8);
  let colNum = (i + 1) - (rowNum - 1)*8;
  piece.style.top = (rowNum - 1)*98 + 7 + "px";
  piece.style.left = (colNum - 1)*98 + 7 + "px";
  piece.draggable = false; // override the default draggability of images
  puzzleBoard.appendChild(piece);      
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

//add event listeners to each puzzle piece
for(let i = 0; i < pieces.length; i++) {
  pieces[i].addEventListener("pointerdown", grabPiece);
}

//create grabPiece function
function grabPiece(event) {
  //set value of pointerX to clientX
  pointerX = event.clientX;
  //set value of pointerY to clientY
  pointerY = event.clientY;

  //set value of touchAction to none
  event.target.style.touchAction = "none";

  //increase value of zCounter by 1 and apply value to zIndex
  zCounter++;
  event.target.style.zIndex = zCounter;

  //set value of pieceX to offsetLeft
  pieceX = event.target.offsetLeft;
  //set value of pieceY to offsetTop
  pieceY = event.target.offsetTop;

  //add event listeners for moving and dropping
  event.target.addEventListener("pointermove", movePiece);
  event.target.addEventListener("pointerup", dropPiece);
}

//create movePiece function
function movePiece(event) {
  //declare diffX to equal difference between e.clientX and pointerX
  let diffX = event.clientX - pointerX;
  //declare diffY to equal difference between e.clientY and pointerY
  let diffY = event.clientY - pointerY;

  //set new positions
  event.target.style.left = pieceX + diffX + "px";
  event.target.style.top = pieceY + diffY + "px";
}

//create dropPiece function
function dropPiece(event) {
  //remove movePiece function from event listener pointermove
  event.target.removeEventListener("pointermove", movePiece);

  //remove dropPiece function from event listener pointerup
  event.target.removeEventListener("pointerup", dropPiece);
}