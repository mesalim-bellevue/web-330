"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Meher Salim
      Date:   05/14/2024

      Filename: project12-03.js
*/

//apply click() method to article > h2 selector
$("article > h2").click(function() {
  //declare vairables using jQuery
  const heading = $(this); //target of click event
  const list = heading.next(); //next sibling element of heading
  const headingImage = heading.children("img");  //children of heading with tag "img"

  //alternate between hiding and showing content from list by using slideToggle()
  list.slideToggle(500); //500 = half a second

  //change symbol in heading using attr()
  const src = headingImage.attr("src");
  if (src === "plus.png") {
    headingImage.attr("src", "minus.png");
  } else {
    headingImage.attr("src", "plus.png");
  }
});
