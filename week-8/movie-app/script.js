/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author:   Meher Salim
  Date:     05/09/2024
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Aladdin",
    director: "Ron Clements, John Musker",
    releaseYear: 1992,
    synopsis: "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true."
  },
  {
    title: "Avengers Endgame",
    director: "Anthony Russo, Joe Russo",
    releaseYear: 2019,
    synopsis: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
  },
  {
    title: "Hercules",
    director: "Ron Clements, John Musker",
    releaseYear: 1997,
    synopsis: "The son of Zeus and Hera is stripped of his immortality as an infant and must become a true hero in order to reclaim it."
  },
  {
    title: "Monster's Inc",
    director: "Peter Doctor, David Silverman, Lee Unkrich",
    releaseYear: 2001,
    synopsis: "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think."
  },
  {
    title: "The Lion King",
    director: "Roger Allers, Rob Minkoff",
    releaseYear: 1994,
    synopsis: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
  },
  {
    title: "Tangled",
    director: "Nathan Greno, Byron Howard",
    releaseYear: 2010,
    synopsis: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is."
  }
];

//fetchMovie function
function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    //simulate fetching data with setTimeout
    setTimeout(() => {
      //find movie object in array based on title
      const movie = movies.find(movie => movie.title === title);

      if (movie) {
        //movie found, resolve promise
        resolve(movie);
      } else {
        //movie not found, reject promise with error message
        reject(`Movie with title "${title}" not found.`);
      }
    }, 1000);//simulate delay of 30 seconds
  });
}

//displayMovie function
async function displayMovie(event) {
  const titleInput = document.getElementById("title-input");
  const title = titleInput.value.trim();//get trimmed valie of movie title

  try {
    //call fetchMovie function
    const movie = await fetchMovie(title);

    //update HTML to display movie info
    const movieTitle = document.getElementById("movie-title");
    const movieDirector = document.getElementById("movie-director");
    const movieYear = document.getElementById("movie-year");
    const movieSynopsis = document.getElementById("movie-synopsis");

    movieTitle.textContent = movie.title;
    movieDirector.textContent = "Director: " + movie.director;
    movieYear.textContent = "Release Year: " + movie.releaseYear;
    movieSynopsis.textContent = "Synopsis: " + movie.synopsis;

    //show movie details container
    document.getElementById("movie-info").style.display = "block";

    //clear error messageif any
    document.getElementById("error-message").textContent = "";
  } catch (error) {
    //handle error if movie not found
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = error;

    //clear movie details
    const movieInfo = document.getElementById("movie-info");
    movieInfo.style.display = "none";
  }
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  event.preventDefault();//prevent form submission
  displayMovie();//call displayMovie function
});