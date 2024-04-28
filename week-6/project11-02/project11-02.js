"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Meher Salim 
      Date:   04/23/2024

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
  //declare codeValue and countryValue
  let codeValue = postalCode.value;
  let countryValue = country.value;

  //set vlaue for place and region to empty strings
  place.value = "";
  region.value = "";

  //use fetch to access API
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
  //add then method to parse JSON response  
  .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
  //add then method, set value of place and region
  .then(json => { //
    place.value = json.places[0]["place name"];
    region.value = json.places[0]["state abbreviation"];
  })
  //if rejected write error message
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
}



