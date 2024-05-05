/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:   Meher Salim
  Date:     05/02/2024
  Filename: script.js
*/

"use strict";

let heroes = [
  // TODO: Create superhero objects
  { name: "Jack Sheppard", superpower: "Tiger Shapeshifter", weakness: "Magic", city: "Dead End" },
  { name: "Aelin Galathynius", superpower: "Fae Assassin", weakness: "Arrogance", city: "Orynth" },
  { name: "Valek Icefaren", superpower: "Null Shield", weakness: "Null Shield", city: "Military District 6" },
];

function fetchHero1() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(heroes[0]);
      } else {
        reject(new Error("Failed to fetch Tiger"));
      }
    }, 2000);
  });
}

function fetchHero2() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(heroes[1]);
      } else {
        reject(new Error("Failed to fetch Fireheart"));
      }
    }, 3000);
  });
}

function fetchHero3() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <0.5 ) {
        resolve(heroes[2]);
      } else {
        reject(new Error("Failed to fetch Ghost"));        
      }
    }, 4000);
  });

}

// TODO: Use Promise.allSettled to fetch all heroes and update the webpage
Promise.allSettled([fetchHero1(), fetchHero2(), fetchHero3()])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        let hero = result.value;
        updateHeroInfo(index + 1, hero);
      } else {
        let error = result.reason;
        displayError(index + 1, error);
      }
    });
  });

function updateHeroInfo(heroNumber, hero) {
  document.getElementById(`hero${heroNumber}-name`).textContent = hero.name;
  document.getElementById(`hero${heroNumber}-superpower`).textContent = hero.superpower;
  document.getElementById(`hero${heroNumber}-weakness`).textContent = hero.weakness;
  document.getElementById(`hero${heroNumber}-city`).textContent = hero.city;
}

function displayError(heroNumber, error) {
  document.getElementById(`hero${heroNumber}-error`).textContent = error.message;
}