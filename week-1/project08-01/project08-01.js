"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Meher Salim
      Date:   03/23/2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

//contructor function for timer with parmaters min and sec
function timer(min, sec) {
  //set timer.minutes
  this.minutes = min;
  //set timer.seconds
  this.seconds = sec;
  //set timer.timeID
  this.timeID = null;
}

//runPause method with parameters timer, minBox, and secBox using if else statement
function runPause(timer, minBox, secBox) {
  //if timeID is defined
  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    //condition interval
    timer.timeID = window.setInterval(function() {
    countdown(timer, minBox, secBox);
    }, 1000)
  }
}

//setup countdown function
function countdown(timer, minBox, secBox) {
  //if timer.seconds is greater than 0
  if (timer.seconds > 0) {
    timer.seconds -= 1;
  } else if (timer.minutes > 0) {
    //if timer.minutes is greater than 0
    timer.minutes -= 1;
    timer.seconds = 59;
  } else {
    //clear interval
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  }

  //set minutes and seconds
  minBox.value = timer.minutes;
  secBox.value = timer.seconds;
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

//declare myTimer
const myTimer = new timer(minBox.value, secBox.value);

//create onchange event for minutes
minBox.onchange = ()=> {
  myTimer.minutes = minBox.value;
}

//create onchange event for seconds
secBox.onchange = ()=> {
  myTimer.seconds = secBox.value;
}

//create onclick event for runPauseTimer btn
runPauseTimer.onclick = ()=> {
  runPause(myTimer, minBox, secBox);
}