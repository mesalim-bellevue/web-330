/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author:     Meher Salim
  Date:       04/18/2024
  Filename:   script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  //define three formal parameters: tableNumber, capacity, and isReserved
  {tableNumber: 1, capacity: 4, isReserved: false},
  {tableNumber: 2, capacity: 6, isReserved: false},
  {tableNumber: 3, capacity: 2, isReserved: false},
  {tableNumber: 4, capacity: 2, isReserved: false},
  {tableNumber: 5, capacity: 4, isReserved: false},
  {tableNumber: 6, capacity: 4, isReserved: false},
  {tableNumber: 7, capacity: 6, isReserved: false},
  {tableNumber: 8, capacity: 4, isReserved: false},
  {tableNumber: 9, capacity: 2, isReserved: false},
  {tableNumber: 10, capacity: 4, isReserved: false},
  {tableNumber: 11, capacity: 4, isReserved: false},
  {tableNumber: 12, capacity: 4, isReserved: false},
  {tableNumber: 13, capacity: 2, isReserved: false},
  {tableNumber: 14, capacity: 4, isReserved: false},
  {tableNumber: 15, capacity: 2, isReserved: false}
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  //find the table through tableNumber
  const table = tables.find(table => table.tableNumber === tableNumber);

  //if table is reserved
  if (!table || table.isReserved) {
    callback("Error: Table is not available for reservation");
    return;
  }

  //update table status
  table.isReserved = true;

  //setTimeout
  setTimeout(() => {
    callback(`you have successfully reserved table ${tableNumber}.`);
  }, time);
}

// When the form is submitted, call the reserveTable function
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  // Add your code here
  //prevent form submission
  e.preventDefault();

  //declare name and tableNumber
  const name = document.getElementById("name").value;
  const tableNumber = parseInt (document.getElementById("tableNumber").value);

  //call reserveTable function and set time to 30 seconds
  reserveTable(tableNumber, function(message) {
    document.getElementById("message").innerText = `${name}, ${message}`;
  }, 5000);
});
