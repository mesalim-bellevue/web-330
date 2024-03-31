/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Meher Salim
  Date: 03/29/2024
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass){
  //TODO: Implement this function
  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getClass: function() {
      return characterClass;
    },
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  //TODO: Get form values
  //assign values
  const heroName = document.getElementById("heroName").value;
  const heroGender = document.getElementById("heroGender").value;
  const heroClass = document.getElementById("heroClass").value;
  //TODO: Create character
  //assign createCharacter function
  const character = createCharacter(heroName, heroGender, heroClass);
  displayCharacter(character);
  //TODO: Display character information
  //write displayCharacter function
  function displayCharacter(character) {
    const characterOutput = document.getElementById("characterOutput");
    characterOutput.innerHTML = `
      <strong>Name:</strong> ${character.getName()}<br>
      <strong>Gender:</strong> ${character.getGender()}<br>
      <strong>Class:</strong> ${character.getClass()}
    `;
  }
});

